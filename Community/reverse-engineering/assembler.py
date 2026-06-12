OPCODES = {
    "PUSH": 0x01,
    "POP": 0x02,
    "DUP": 0x03,
    "LOAD": 0x04,
    "STORE": 0x05,
    "SWAP": 0x06,
    "ADD": 0x10,
    "SUB": 0x11,
    "MUL": 0x12,
    "XOR": 0x13,
    "AND": 0x14,
    "ROL": 0x15,
    "CMP": 0x20,
    "JZ": 0x21,
    "JMP": 0x22,
    "CALL": 0x30,
    "RET": 0x31,
    "HALT": 0xFF,
}


def parse_number(val_str):
    val_str = val_str.strip()
    if val_str.lower().startswith("0x"):
        return int(val_str, 16)
    return int(val_str)


def compile(source_code, array_name="program_code"):
    lines = source_code.splitlines()
    cleaned_instructions = []
    labels = {}
    current_address = 0
    for line_num, line in enumerate(lines, 1):
        line = line.split(";")[0].split("//")[0].strip()
        if not line:
            continue
        if line.endswith(":"):
            label_name = line[:-1].strip()
            labels[label_name] = current_address
            continue
        parts = line.split(maxsplit=1)
        mnemonic = parts[0].upper()
        args = parts[1].split(",") if len(parts) > 1 else []
        args = [a.strip() for a in args if a.strip()]
        cleaned_instructions.append(
            {
                "line_num": line_num,
                "address": current_address,
                "mnemonic": mnemonic,
                "args": args,
            }
        )
        size = 1
        if mnemonic in ("PUSH", "LOAD", "STORE", "ROL", "JZ", "JMP", "HALT"):
            size += 1
        elif mnemonic == "CALL":
            size += 2
        current_address += size

    bytecode = bytearray()
    for inst in cleaned_instructions:
        mnemonic = inst["mnemonic"]
        args = inst["args"]
        addr = inst["address"]
        bytecode.append(OPCODES[mnemonic])
        if mnemonic in ("PUSH", "LOAD", "STORE", "ROL", "HALT"):
            bytecode.append(parse_number(args[0]) & 0xFF)
        elif mnemonic in ("JMP", "JZ"):
            target = args[0]
            if target in labels:
                rel_offset = labels[target] - (addr + 2)
                bytecode.append(rel_offset & 0xFF)
            else:
                bytecode.append(parse_number(target) & 0xFF)
        elif mnemonic == "CALL":
            target_addr = (
                labels[args[0]] if args[0] in labels else parse_number(args[0])
            )
            bytecode.append((target_addr >> 8) & 0xFF)
            bytecode.append(target_addr & 0xFF)

    c_code = f"const uint8_t {array_name}[] = {{\n    "
    bytes_formatted = [f"0x{b:02X}" for b in bytecode]
    lines_formatted = [
        ", ".join(bytes_formatted[i : i + 12])
        for i in range(0, len(bytes_formatted), 12)
    ]
    c_code += ",\n    ".join(lines_formatted)
    c_code += f"\n}};\n\nconst unsigned int {array_name}_len = {len(bytecode)};\n"
    return c_code


asm_code = """
    ; Check length (22)
    LOAD  0xFF
    PUSH  0x16
    SUB
    JZ    start
    HALT  0x01
start:
"""

flag = "CTF{5t4ck_VM_r3v3rs3r}"
# Cycle between 0x67 and 0x69
keys = [0x67, 0x69]
for i in range(22):
    char = ord(flag[i])
    char_rol = ((char << 2) | (char >> 6)) & 0xFF
    key = keys[i % 2]
    target = (char_rol ^ key) & 0xFF

    asm_code += f"""
char{i}:
    LOAD  {hex(i)}
    ROL   2
    PUSH  {hex(key)}
    XOR
    PUSH  {hex(target)}
    SUB
    JZ    char{i + 1}
    HALT  0x01
"""

asm_code += """
char22:
    HALT  0x00
"""

print(compile(asm_code, array_name="bc"))

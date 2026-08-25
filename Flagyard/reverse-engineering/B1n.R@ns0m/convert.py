def generate_pattern():
    print(f"{'Karakter':<10} | {'Decimal':<8} | {'Biner 8-bit':<12} | Output Pola")
    print("-" * 50)
    
    # Loop melalui seluruh karakter ASCII standar (0 - 127)
    for i in range(128):
        char = chr(i)
        
        # 1. Jadikan decimal (ASCII)
        dec_val = ord(char)
        
        # 2. Jadikan bilangan biner 8 bit
        # '08b' memastikan format berupa biner dan dipadding nol di depan agar selalu 8 digit
        bin_val = format(dec_val, '08b')
        
        # 3. Jika terdapat angka 1, tandai indeksnya
        hasil_pola = ""
        for indeks, bit in enumerate(bin_val):
            if bit == '1':
                hasil_pola += str(indeks)
                
        # Jika hasil_pola kosong (untuk karakter NUL/0), beri nilai khusus agar tidak kosong
        if not hasil_pola:
            hasil_pola = "(tidak ada bit 1)"
            
        # Cetak menggunakan repr() agar karakter tak terlihat tetap tercetak rapi (misal: '\n')
        print(f"    {hasil_pola} = {repr(char):<10}")

# Jalankan fungsi
if __name__ == "__main__":
    generate_pattern()
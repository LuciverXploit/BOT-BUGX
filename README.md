

1. **Perbarui dan tingkatkan paket:**
   ```bash
   $ pkg update && pkg upgrade
   ```
   Perintah ini memperbarui daftar paket dan meningkatkan semua paket yang sudah terpasang ke versi terbaru.

2. **Instal Node.js:**
   ```bash
   $ pkg install nodejs
   ```
   Perintah ini menginstal Node.js, sebuah platform JavaScript yang populer untuk pengembangan aplikasi server.

3. **Instal Midnight Commander:**
   ```bash
   $ pkg install mc
   ```
   Perintah ini menginstal Midnight Commander, sebuah file manager berbasis teks.

4. **Atur penyimpanan Termux:**
   ```bash
   $ termux-setup-storage
   ```
   Perintah ini memberi izin kepada Termux untuk mengakses penyimpanan perangkat.

5. **Navigasi ke direktori kartu SD:**
   ```bash
   $ cd /sdcard
   ```
   Perintah ini memindahkan direktori kerja saat ini ke direktori kartu SD.

6. **Salin file ke direktori home:**
   ```bash
   $ cp -r namafile /$HOME
   ```
   Perintah ini menyalin folder `namafile` dari kartu SD ke direktori home pengguna di Termux.

7. **Masuk ke direktori home:**
   ```bash
   $ cd
   ```
   Perintah ini memindahkan direktori kerja saat ini ke direktori home pengguna.

8. **Masuk ke folder yang baru disalin:**
   ```bash
   $ cd namafile
   ```
   Perintah ini memindahkan direktori kerja saat ini ke folder `namafile` di dalam direktori home.

9. **Instal dependencies Node.js:**
   ```bash
   $ npm i
   ```
   Perintah ini menginstal semua dependencies yang tercantum dalam file `package.json`.

10. **Perbaiki kerentanan paket:**
    ```bash
    $ npm audit fix --force
    ```
    Perintah ini memperbaiki kerentanan keamanan dalam dependencies yang diinstal.

11. **Jalankan Midnight Commander:**
    ```bash
    $ mc
    ```
    Perintah ini menjalankan Midnight Commander.

    - **Aktifkan mode CTRL:** Tekan `5` untuk menyalin dan ganti dengan path `/storage/emulated/0/namafile`, lalu tekan `OK`.
    - **Jika ada kesalahan:** Tekan `skip` untuk melewati kesalahan.

12. **Instal FFmpeg:**
    ```bash
    $ pkg install ffmpeg
    ```
    Perintah ini menginstal FFmpeg, sebuah alat untuk memproses audio dan video.

13. **Instal ImageMagick:**
    ```bash
    $ pkg install imagemagick
    ```
    Perintah ini menginstal ImageMagick, sebuah perangkat lunak untuk mengedit gambar.

14. **Mulai aplikasi Node.js:**
    ```bash
    $ npm start
    ```
    Perintah ini menjalankan aplikasi Node.js yang telah dikonfigurasi.

Dengan mengikuti langkah-langkah di atas, Anda dapat mengatur lingkungan pengembangan Node.js dan menjalankan aplikasi Node.js di Termux.

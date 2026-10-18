// 1. Ambil atau tangkap elemen tombol dari HTML berdasarkan ID-nya
const themeButton = document.querySelector('#theme-toggle-btn');

// 2. Berikan "pendengar" (listener) agar JavaScript tahu kapan tombol diklik
themeButton.addEventListener('click', function() {
    
    // 3. Perintah untuk memunculkan atau mencopot kelas 'dark-mode' pada elemen body
    document.body.classList.toggle('dark-mode');

    // 4. (Opsional) Mengubah teks pada tombol setelah diklik
    if (document.body.classList.contains('dark-mode')) {
        themeButton.textContent = '☀️ Mode Terang';
    } else {
        themeButton.textContent = '🌙 Mode Gelap';
    }

});
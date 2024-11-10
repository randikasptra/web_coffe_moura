function toggleMenu() {
    const navbar = document.querySelector('.randi_navbar');
    navbar.classList.toggle('active');
}

let isMessageOne = true;

// Fungsi untuk menampilkan switch alert
function showSwitchAlert() {
    if (isMessageOne) {
        alert("Terima kasih telah bergabung dengan Moura Coffee!");
    } else {
        alert("Selamat! Nikmati keuntungan eksklusif sebagai member Moura Coffee.");
    }
    // Ganti nilai isMessageOne untuk mengubah pesan saat tombol diklik lagi
    isMessageOne = !isMessageOne;
}
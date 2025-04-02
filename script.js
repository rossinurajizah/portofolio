const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
const body = document.body;
const menuLinks = document.querySelectorAll("nav ul li a");

// Fungsi untuk membuka menu
function openMenu() {
    nav.classList.add("slide");
    body.style.overflow = "hidden"; // Mencegah scroll saat menu terbuka
    body.style.height = "100vh"; // Memastikan tidak ada scroll vertikal
}

// Fungsi untuk menutup menu
function closeMenu() {
    nav.classList.remove("slide");
    body.style.overflow = ""; // Mengembalikan scroll normal
    body.style.height = ""; 
    menuToggle.checked = false; // Hilangkan centang pada toggle
}

// Toggle menu saat tombol hamburger diklik
menuToggle.addEventListener("click", function () {
    if (menuToggle.checked) {
        openMenu();
    } else {
        closeMenu();
    }
});

// Tutup menu saat klik salah satu link
menuLinks.forEach(link => {
    link.addEventListener("click", function () {
        closeMenu(); // Tutup menu saat link diklik
    });
});

// Tutup menu jika klik di luar menu
document.addEventListener("click", function (event) {
    if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
        closeMenu();
    }
});

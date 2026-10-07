// --- 1. Hamburger menu (HP) ---
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', function () {
  navMenu.classList.toggle('buka');
});

// Tutup menu setelah link diklik (smooth scroll diatur oleh CSS)
navMenu.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    navMenu.classList.remove('buka');
  });
});

// --- 2. Bayangan navbar saat di-scroll ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
});

// --- 3. Modal tombol "Lihat Detail" ---
const modal = document.getElementById('modal');
const modalJudul = document.getElementById('modalJudul');
const modalIsi = document.getElementById('modalIsi');

function bukaModal(judul, isi) {
  modalJudul.textContent = judul;
  modalIsi.textContent = isi;
  modal.classList.add('aktif');
}

document.querySelectorAll('.btn-detail').forEach(function (tombol) {
  tombol.addEventListener('click', function () {
    bukaModal(tombol.dataset.nama, tombol.dataset.info);
  });
});

// Tombol "Selengkapnya" di bagian Tentang
document.getElementById('btnSelengkapnya').addEventListener('click', function () {
  bukaModal('Tentang Indomie', 'Indomie hadir dengan banyak varian rasa untuk menemani berbagai momen. Kunjungi situs resmi Indomie untuk informasi lengkap.');
});

// Tutup modal
document.getElementById('tutupModal').addEventListener('click', function () {
  modal.classList.remove('aktif');
});
modal.addEventListener('click', function (e) {
  if (e.target === modal) modal.classList.remove('aktif');
});

// --- 4. Animasi fade-in saat section terlihat ---
const elemenFade = document.querySelectorAll('.fade');
const pengamat = new IntersectionObserver(function (daftar) {
  daftar.forEach(function (item) {
    if (item.isIntersecting) {
      item.target.classList.add('tampil');
      pengamat.unobserve(item.target);
    }
  });
}, { threshold: 0.15 });

elemenFade.forEach(function (el) { pengamat.observe(el); });

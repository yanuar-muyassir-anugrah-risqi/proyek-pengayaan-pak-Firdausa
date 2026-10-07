// Hamburger menu (HP)
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', function () {
  navMenu.classList.toggle('buka');
});

// Tutup menu setelah link diklik
navMenu.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    navMenu.classList.remove('buka');
  });
});

// Bayangan navbar waktu scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
});

// Modal tombol "Lihat Detail"
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

// Tombol "Selengkapnya" di Tentang
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

// Animasi fade-in kalau section terlihat
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

// SLIDER PRODUK
const produkUtama = document.querySelector('.produk-utama');
const utamaGambar = document.getElementById('utamaGambar');
const utamaNama = document.getElementById('utamaNama');
const utamaDeskripsi = document.getElementById('utamaDeskripsi');
const sliderTrack = document.getElementById('sliderTrack');
const semuaItem = document.querySelectorAll('.item');

semuaItem.forEach(function (item) {
  item.addEventListener('click', function () {
    semuaItem.forEach(function (i) { i.classList.remove('aktif'); });
    item.classList.add('aktif');

    produkUtama.classList.add('ganti');

    setTimeout(function () {
      utamaGambar.src = item.dataset.gambar;
      utamaGambar.alt = item.dataset.nama;
      utamaNama.textContent = item.dataset.nama;
      utamaDeskripsi.textContent = item.dataset.deskripsi;
      produkUtama.classList.remove('ganti');
    }, 250);
  });
});

// Tombol panah kiri & kanan -> geser slider
const jarakGeser = 260;
document.getElementById('panahKiri').addEventListener('click', function () {
  sliderTrack.scrollBy({ left: -jarakGeser, behavior: 'smooth' });
});
document.getElementById('panahKanan').addEventListener('click', function () {
  sliderTrack.scrollBy({ left: jarakGeser, behavior: 'smooth' });
});


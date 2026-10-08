const pemilikKoleksi = "Safira Dhiyaunnafisah";
const judulKoleksi = "Koleksi Pakaian di Lemari";
const deskripsiKoleksi = "Katalog digital untuk mencatat, merawat, dan mengelola koleksi pakaian favorit di lemari.";
const jumlahPakaian = 5; 

const kategoriPakaian = ["Gamis & Abaya", "Pakaian Kasual", "Pakaian Formal"];

const profilKoleksi = {
    pemilik: pemilikKoleksi,
    judul: judulKoleksi,
    deskripsi: deskripsiKoleksi,
    jumlah: jumlahPakaian,
    kategori: kategoriPakaian
};

const kalimatPerkenalan = `Selamat datang di ${profilKoleksi.judul} milik ${profilKoleksi.pemilik}. Saat ini tersimpan ${profilKoleksi.jumlah} pakaian yang terbagi dalam ${profilKoleksi.kategori.length} kategori.`;

console.log(kalimatPerkenalan);
console.log("Detail Profil Koleksi:", profilKoleksi);


// 1. Menyusun kalimat perkenalan dari satu object
function buatPerkenalan({ pemilik, judul, jumlah }) {
    return `Halo! Saya ${pemilik}, pengelola${judul}. Saat ini ada ${jumlah} pakaian yang siap digunakan.`;
}

// 2. Merapikan daftar kategori menjadi satu baris teks
const formatKategori = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profilKoleksi));
console.log("Kategori Tersedia:", formatKategori(profilKoleksi.kategori));
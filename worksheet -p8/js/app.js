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

console.log("--- LEMBAR B ---");
console.log(kalimatPerkenalan);
console.log("Detail Profil Koleksi:", profilKoleksi);
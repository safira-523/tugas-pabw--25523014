
import { ambilProyek } from './api.js';
import {
  render,
  tampilkanGalat,
  aturMemuat,
  pasangFilter,
  pasangFormTambah
} from './dom.js';

const profil = {
  nama: "Safira Dhiyaunnafisah",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

const jumlahPakaian = 5;

const kalimatPerkenalan =
  `Nama saya ${profil.nama}, ${profil.peran} yang mengelola Koleksi Pakaian di Lemari.`;

console.log(kalimatPerkenalan);
console.log("Data Profil:", profil);

function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log("Keahlian:", formatKeahlian(profil.keahlian));

export let daftarProyek = [];

console.log("Jumlah pakaian yang direncanakan:", jumlahPakaian);
console.table(profil.keahlian);
console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const katalog = daftarProyek.find(
  (proyek) => proyek.judul === "Simpel Abaya"
);
console.log("Hasil find (Simpel Abaya):", katalog);

const daftarJudul = daftarProyek.map((proyek) => proyek.judul);
console.log("Hasil map (Daftar Judul):", daftarJudul);

const profilSalinan = { ...profil };
console.log("Hasil salinan objek { ...profil }:", profilSalinan);

// Mengambil data dan menampilkannya ke halaman
async function mulaiAplikasi() {
  aturMemuat(true);

  try {
    const data = await ambilProyek();

    console.log(
      "Bentuk data:",
      Array.isArray(data) ? "Array" : typeof data
    );
    console.log("Jumlah data:", data.length);
    console.table(data);

    daftarProyek = data;

    render(daftarProyek);
    pasangFilter(daftarProyek);
    pasangFormTambah(daftarProyek);
  } catch (galat) {
    tampilkanGalat(
      "Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman."
    );

    console.error("Gagal mengambil data proyek:", galat.message);
  } finally {
    aturMemuat(false);
  }
}

mulaiAplikasi();

const profil = {
  nama: "Safira Dhiyaunnafisah",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

const jumlahPakaian = 5;

const kalimatPerkenalan = `Nama saya ${profil.nama}, ${profil.peran} yang mengelola Koleksi Pakaian di Lemari.`;

console.log(kalimatPerkenalan);
console.log("Data Profil:", profil);


function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log("Keahlian:", formatKeahlian(profil.keahlian));

const daftarProyek = [
  { judul: "Simpel Abaya", tahun: 2026, selesai: true },
  { judul: "Gamis Katun", tahun: 2026, selesai: false },
  { judul: "Jilbab Pashmina", tahun: 2026, selesai: true },
  { judul: "Kemeja Casual", tahun: 2026, selesai: false },
  { judul: "Pasban Silk", tahun: 2026, selesai: true }
];

console.table(profil.keahlian);

console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const katalog = daftarProyek.find((proyek) => proyek.judul === "Simpel Abaya");
console.log("Hasil find (Simpel Abaya):", katalog);
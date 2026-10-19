export const profil = {
  nama: "Safira Dhiyaunnafisah",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");

export function saring(daftarPakaian, kategoriAktif) {
  if (kategoriAktif === "semua") {
    return daftarPakaian;
  }

  return daftarPakaian.filter(
    (pakaian) =>
      String(pakaian.status || "").toLowerCase() === kategoriAktif
  );
}

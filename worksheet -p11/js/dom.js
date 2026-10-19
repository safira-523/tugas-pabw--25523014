const wadahDaftar = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#kosong");
const pesanMuat = document.querySelector("#muat");
const barisFilter = document.querySelector("#filter");
const tombolSemua = document.querySelector("#filter button[data-kategori='semua']");
const formTambah = document.querySelector("#tambah-pakaian form");
const inputJenis = document.querySelector("#jenis");
const inputMerk = document.querySelector("#merk");
const inputStatus = document.querySelector("#status");

export const elemenDOM = {
  wadahDaftar,
  pesanKosong,
  pesanMuat,
  barisFilter,
  tombolSemua,
  formTambah,
  inputJenis,
  inputMerk,
  inputStatus,
};

function buatKartu(pakaian) {
  const kartu = document.createElement("li");
  kartu.className = "kartu";

  const isi = document.createElement("div");
  isi.className = "kartu__isi";

  const judul = document.createElement("h3");
  judul.className = "kartu__judul";
  judul.textContent = `${pakaian.jenis} ${pakaian.merk}`;

  const deskripsi = document.createElement("p");
  deskripsi.textContent =
    `Koleksi ${pakaian.jenis} dari ${pakaian.merk}.`;

  const kaki = document.createElement("div");
  kaki.className = "kartu__kaki";

  const status = document.createElement("span");
  const statusTeks = String(pakaian.status || "").toLowerCase();

  status.textContent =
    `Status: ${statusTeks.charAt(0).toUpperCase()}${statusTeks.slice(1)}`;

  kaki.append(status);
  isi.append(judul, deskripsi);
  kartu.append(isi, kaki);
  return kartu;
}

export function render(daftar) {
  wadahDaftar.textContent = "";

  if (daftar.length === 0) {
    pesanKosong.textContent = "Belum ada data.";
    pesanKosong.hidden = false;
    pesanMuat.hidden = true;
    return;
  }

  pesanKosong.hidden = true;
  pesanMuat.hidden = true;

  daftar.forEach((pakaian) => {
    wadahDaftar.append(buatKartu(pakaian));
  });
}

export function aturMemuat(memuat) {
  pesanMuat.hidden = !memuat;

  if (memuat) {
    wadahDaftar.textContent = "";
    pesanKosong.hidden = true;
  }
}

export function tampilkanGalat(pesan) {
  wadahDaftar.textContent = "";
  pesanMuat.hidden = true;
  pesanKosong.textContent = pesan;
  pesanKosong.hidden = false;
}

export function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}
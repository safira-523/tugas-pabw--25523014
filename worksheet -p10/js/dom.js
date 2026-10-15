import { daftarProyek } from './app.js';

const wadahDaftar = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#kosong");
const barisFilter = document.querySelector("#filter");
const formTambah = document.querySelector("#tambah-pakaian form");
const inputJenis = document.querySelector("#jenis");
const inputMerk = document.querySelector("#merk");
const inputStatus = document.querySelector("#status");

function buatBarisTabel(proyek) {
  const tr = document.createElement("tr");

  const thJenis = document.createElement("th");
  thJenis.scope = "row";
  thJenis.textContent = proyek.jenis;

  const tdMerk = document.createElement("td");
  tdMerk.textContent = proyek.merk;

  const tdStatus = document.createElement("td");
  tdStatus.textContent = proyek.status;

  tr.append(thJenis, tdMerk, tdStatus);
  return tr;
}

function renderDaftar(data) {
  wadahDaftar.textContent = "";

  if (data.length === 0) {
    pesanKosong.hidden = false;
    return;
  }

  pesanKosong.hidden = true;
  data.forEach((proyek) => {
    wadahDaftar.append(buatBarisTabel(proyek));
  });
}

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

renderDaftar(daftarProyek);
const tombolSemua = document.querySelector("#filter button[data-kategori='semua']");
if (tombolSemua) {
  tandaiTombolAktif(tombolSemua);
}

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return; 

  const kategori = tombol.dataset.kategori;

  const terpilih = daftarProyek.filter(
    (proyek) => kategori === "semua" || proyek.status === kategori || proyek.kategori === kategori
  );

  renderDaftar(terpilih);
  tandaiTombolAktif(tombol);
});

formTambah.addEventListener("submit", (event) => {
  event.preventDefault();

  const jenis = inputJenis.value.trim();
  const merk = inputMerk.value.trim();
  const status = inputStatus.value.trim();

  if (jenis === "" || merk === "" || status === "") {
    alert("Mohon isi semua kolom dengan benar (tidak boleh kosong atau hanya spasi).");
    return;
  }

  const dataBaru = {
    jenis: jenis,
    merk: merk,
    kategori: jenis,
    status: status.toLowerCase(),
    tahun: 2026,
    selesai: true
  };

  daftarProyek.push(dataBaru);
  renderDaftar(daftarProyek);
  formTambah.reset();
});
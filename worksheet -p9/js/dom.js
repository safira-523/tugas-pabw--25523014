import { daftarProyek } from './app.js';

const wadahDaftar = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#kosong");
const barisFilter = document.querySelector("#filter");

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
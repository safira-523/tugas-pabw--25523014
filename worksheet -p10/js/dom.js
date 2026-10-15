const wadahDaftar = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#kosong");
const pesanMuat = document.querySelector("#muat");
const pesanGalat = document.querySelector("#galat");

const barisFilter = document.querySelector("#filter");
const formTambah = document.querySelector("#tambah-pakaian form");
const inputJenis = document.querySelector("#jenis");
const inputMerk = document.querySelector("#merk");
const inputStatus = document.querySelector("#status");

function buatBarisTabel(proyek) {
  const item = document.createElement("div");
  item.className = "item-pakaian";

  const jenis = document.createElement("strong");
  jenis.textContent = proyek.jenis;

  const merk = document.createElement("span");
  merk.textContent = proyek.merk;

  const status = document.createElement("span");
  status.textContent = proyek.status;

  item.append(jenis, merk, status);
  return item;
}

export function renderDaftar(data) {
  wadahDaftar.textContent = "";

  pesanMuat.hidden = true;
  pesanGalat.hidden = true;

  if (data.length === 0) {
    pesanKosong.hidden = false;
    return;
  }

  pesanKosong.hidden = true;

  data.forEach((proyek) => {
    wadahDaftar.append(buatBarisTabel(proyek));
  });
}

export function tampilkanMuat() {
  wadahDaftar.textContent = "";
  pesanKosong.hidden = true;
  pesanGalat.hidden = true;
  pesanMuat.hidden = false;
}

export function tampilkanGalat() {
  wadahDaftar.textContent = "";
  pesanKosong.hidden = true;
  pesanMuat.hidden = true;
  pesanGalat.hidden = false;
}

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

export function pasangFilter(daftarProyek) {
  const tombolSemua = document.querySelector(
    "#filter button[data-kategori='semua']"
  );

  if (tombolSemua) {
    tandaiTombolAktif(tombolSemua);
  }

  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    const kategori = tombol.dataset.kategori;

    const terpilih = daftarProyek.filter(
      (proyek) =>
        kategori === "semua" ||
        proyek.status === kategori ||
        proyek.kategori === kategori
    );

    renderDaftar(terpilih);
    tandaiTombolAktif(tombol);
  });
}

export function pasangFormTambah(daftarProyek) {
  formTambah.addEventListener("submit", (event) => {
    event.preventDefault();

    const jenis = inputJenis.value.trim();
    const merk = inputMerk.value.trim();
    const status = inputStatus.value.trim();

    if (jenis === "" || merk === "" || status === "") {
      alert(
        "Mohon isi semua kolom dengan benar (tidak boleh kosong atau hanya spasi)."
      );
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
}
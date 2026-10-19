import { saring } from "./data.js";

import {
  state,
  aturKategori,
  tambahPakaian,
} from "./state.js";

import {
  elemenDOM,
  render,
  tandaiTombolAktif,
} from "./dom.js";

export function pasangPendengar() {
  const {
    barisFilter,
    tombolSemua,
    formTambah,
    inputJenis,
    inputMerk,
    inputStatus,
  } = elemenDOM;

  if (tombolSemua) {
    tandaiTombolAktif(tombolSemua);
  }

  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");

    if (!tombol || !barisFilter.contains(tombol)) {
      return;
    }

    const kategori = tombol.dataset.kategori;

    if (!["semua", "baru", "terpakai"].includes(kategori)) {
      return;
    }

    aturKategori(kategori);
    tandaiTombolAktif(tombol);

    render(
      saring(state.daftarPakaian, state.kategoriAktif)
    );
  });

  formTambah.addEventListener("submit", (event) => {
    event.preventDefault();

    const jenis = inputJenis.value.trim();
    const merk = inputMerk.value.trim();
    const status = inputStatus.value.trim().toLowerCase();

    if (
      jenis === "" ||
      merk === "" ||
      !["baru", "terpakai"].includes(status)
    ) {
      alert(
        "Isi semua kolom. Status harus berupa 'baru' atau 'terpakai'."
      );
      return;
    }

    const dataBaru = {
      id: Date.now(),
      jenis,
      merk,
      status,
    };

    tambahPakaian(dataBaru);

    render(
      saring(state.daftarPakaian, state.kategoriAktif)
    );

    formTambah.reset();
  });
}

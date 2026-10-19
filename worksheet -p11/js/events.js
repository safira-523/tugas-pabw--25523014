
import {
  state,
  pilihKategori,
  tambahPakaian,
  tambahFavorit,
  aturUlang,
} from "./state.js";

import { elemenDOM } from "./dom.js";

export function pasangPendengar() {
  const {
    barisFilter,
    wadahDaftar,
    formTambah,
    inputJenis,
    inputMerk,
    inputStatus,
  } = elemenDOM;

  const tombolAturUlang = document.querySelector("#atur-ulang");

  if (tombolAturUlang) {
    tombolAturUlang.addEventListener("click", () => {
      aturUlang();
    });
  }

  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");

    if (!tombol || !barisFilter.contains(tombol)) return;

    const kategori = tombol.dataset.kategori;

    if (!["semua", "baru", "terpakai"].includes(kategori)) return;

    pilihKategori(kategori);
  });

  wadahDaftar.addEventListener("click", (event) => {
    const tombol = event.target.closest(".favorit");

    if (!tombol || !wadahDaftar.contains(tombol)) return;

    const id = Number(tombol.dataset.id);

    tambahFavorit(id);
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

    formTambah.reset();
  });
}

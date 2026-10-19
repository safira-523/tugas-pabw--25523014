
/*
 * events.js
 * Memasang pendengar peristiwa untuk filter,
 * formulir tambah pakaian, dan tombol favorit.
 */

import {
  state,
  pilihKategori,
  tambahPakaian,
  tambahFavorit,
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

  // 1. Mengatur filter kategori.
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");

    if (!tombol || !barisFilter.contains(tombol)) {
      return;
    }

    const kategori = tombol.dataset.kategori;

    if (!["semua", "baru", "terpakai"].includes(kategori)) {
      return;
    }

    pilihKategori(kategori);
  });

  // 2. Mengatur tombol favorit pada setiap kartu pakaian.
  wadahDaftar.addEventListener("click", (event) => {
    const tombol = event.target.closest(".favorit");

    if (!tombol || !wadahDaftar.contains(tombol)) {
      return;
    }

    const id = Number(tombol.dataset.id);
    tambahFavorit(id);
  });

  // 3. Mengatur formulir untuk menambahkan pakaian.
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

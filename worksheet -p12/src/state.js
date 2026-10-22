
/*
 * state.js
 * Menyimpan keadaan aplikasi dan mengatur perubahannya.
 */
import { render } from "./dom.js";

const KUNCI = "pabw-p11";
const VERSI = 2;

export const state = {
  daftarPakaian: [],
  kategoriAktif: "semua",
  favorit: [],
};

export function isiProyek(daftarPakaian) {
  state.daftarPakaian = [...daftarPakaian];
}

export function simpan(state) {
  const isi = {
    versi: VERSI,
    kategoriAktif: state.kategoriAktif,
    favorit: state.favorit,
  };

  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

// BARU P11 E2: memeriksa simpanan dan nomor versi.
export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI));

    // BARU P11 E2: simpanan kosong atau versi tidak cocok.
    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI);
      return null;
    }

    return isi;
  } catch {
    // BARU P11 E2: simpanan rusak dibuang agar aplikasi tetap berjalan.
    localStorage.removeItem(KUNCI);
    return null;
  }
}

export function pulihkan(isi) {
  if (!isi) return;

  state.kategoriAktif = isi.kategoriAktif;
  state.favorit = isi.favorit;
}

export function pilihKategori(kategori) {
  if (!["semua", "baru", "terpakai"].includes(kategori)) return;

  state.kategoriAktif = kategori;
  simpan(state);
  render(state);
}

export function tambahPakaian(pakaian) {
  state.daftarPakaian = [...state.daftarPakaian, pakaian];
  render(state);
}

export function tambahFavorit(id) {
  if (state.favorit.includes(id)) {
    state.favorit = state.favorit.filter(
      (idFavorit) => idFavorit !== id
    );
  } else {
    state.favorit = [...state.favorit, id];
  }

  simpan(state);
  render(state);
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = "semua";
  state.favorit = [];
  render(state);
}

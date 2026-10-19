import { render } from "./dom.js";
export const state = {
  daftarPakaian: [],
  kategoriAktif: "semua",
  favorit: [],
};

export function isiProyek(daftarPakaian) {
  state.daftarPakaian = [...daftarPakaian];
}

export function pilihKategori(kategori) {
  if (!["semua", "baru", "terpakai"].includes(kategori)) {
    return;
  }

  state.kategoriAktif = kategori;
  render(state);
}

export function tambahPakaian(pakaian) {
  state.daftarPakaian = [
    ...state.daftarPakaian,
    pakaian,
  ];

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

  render(state);
}

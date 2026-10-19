export const state = {
  daftarPakaian: [],
  kategoriAktif: "semua",
  favorit: [],
};

export function isiProyek(daftarPakaian) {
  state.daftarPakaian = [...daftarPakaian];
}

export function aturKategori(kategori) {
  state.kategoriAktif = kategori;
}

export function tambahPakaian(pakaian) {
  state.daftarPakaian = [
    ...state.daftarPakaian,
    pakaian,
  ];
}

export function alihFavorit(id) {
  if (state.favorit.includes(id)) {
    state.favorit = state.favorit.filter(
      (idFavorit) => idFavorit !== id
    );
  } else {
    state.favorit = [...state.favorit, id];
  }
}

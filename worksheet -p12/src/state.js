import { reactive } from "vue"; 

const KUNCI = "pabw-p12"; 
const VERSI = 2;

export const state = reactive({
  daftarProyek: [], 
  kategoriAktif: "semua",
  favorit: [],
  memuat: true,     
  galat: "",        
});

export function isiProyek(daftar) {
  state.daftarProyek = [...daftar];
  state.memuat = false; 
}

export function simpan(state) {
  const isi = {
    versi: VERSI,
    kategoriAktif: state.kategoriAktif,
    favorit: state.favorit,
  };
  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI));
    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI);
      return null;
    }
    return isi;
  } catch {
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
}

export function tambahPakaian(pakaian) {
  state.daftarProyek = [...state.daftarProyek, pakaian];
  simpan(state);
}

export function tambahFavorit(id) {
  if (state.favorit.includes(id)) {
    state.favorit = state.favorit.filter((idFavorit) => idFavorit !== id);
  } else {
    state.favorit = [...state.favorit, id];
  }
  simpan(state);
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = "semua";
  state.favorit = [];
}
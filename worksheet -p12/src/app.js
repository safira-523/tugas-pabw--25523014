
import { ambilProyek } from "./api.js";

import {
  state,
  isiProyek,
  muat,
  pulihkan,
} from "./state.js";

import {
  render,
  aturMemuat,
  tampilkanGalat,
} from "./dom.js";

import { pasangPendengar } from "./events.js";

async function mulai() {
  pasangPendengar();
  aturMemuat(true);

  try {
    const data = await ambilProyek();

    isiProyek(data);

    const simpanan = muat();
    pulihkan(simpanan);

    render(state);
  } catch (galat) {
    tampilkanGalat(
      "Data gagal dimuat. Periksa koneksi internet, lalu muat ulang halaman."
    );

    console.error("Gagal memuat data:", galat.message);
  } finally {
    aturMemuat(false);
  }
}

mulai();

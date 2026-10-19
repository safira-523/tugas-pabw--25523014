import { ambilProyek } from "./api.js";

import { state, isiProyek} from "./state.js";

import { render, aturMemuat, tampilkanGalat} from "./dom.js";

import { pasangPendengar } from "./events.js";

async function mulai() {
  pasangPendengar();
  aturMemuat(true);

  try {
    const data = await ambilProyek();
    isiProyek(data);
    render(state.daftarPakaian);
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

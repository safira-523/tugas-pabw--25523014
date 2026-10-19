
import { ambilProyek } from "./api.js";
import { state, isiProyek } from "./state.js";
import {
  render,
  aturMemuat,
  tampilkanGalat,
} from "./dom.js";
import { pasangPendengar } from "./events.js";

async function mulai() {
  // Memasang event listener satu kali.
  pasangPendengar();

  // Menampilkan status loading.
  aturMemuat(true);

  try {
    // Mengambil data pakaian dari API.
    const data = await ambilProyek();

    // Memasukkan data ke dalam state.
    isiProyek(data);

    // Menggambar tampilan berdasarkan seluruh state.
    render(state);
  } catch (galat) {
    tampilkanGalat(
      "Data gagal dimuat. Periksa koneksi internet, lalu muat ulang halaman."
    );

    console.error("Gagal memuat data:", galat.message);
  } finally {
    // Menyembunyikan status loading.
    aturMemuat(false);
  }
}

mulai();

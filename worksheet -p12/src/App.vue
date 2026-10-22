<script setup>
</script>

<template>
  <div class="page">
    <header>
      <input type="checkbox" id="tema" class="pengalih-tema">
      <label for="tema" class="tombol-tema">Tema gelap</label>

      <div class="header-baris">
        <h1>Koleksi pakaian di lemari</h1>

        <nav aria-label="Navigasi utama">
          <ul>
            <li><a href="#data">Data</a></li>
            <li><a href="#katalog">Katalog</a></li>
            <li><a href="#tambah-pakaian">Tambah</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="isi">
      <aside class="sisi">
        <figure>
          <img
            src="/gambar-saya.webp"
            alt="Pakaian simpel dan elegan dengan hiasan kancing di lengan"
            width="350"
            height="490"
            loading="lazy"
          >
          <figcaption>Simpel Abaya</figcaption>
        </figure>
      </aside>

      <div class="utama">
        <section id="data" class="sorotan">
          <h2>Katalog Pakaian</h2>

          <div id="filter">
            <button type="button" class="filter aktif" data-kategori="semua">Semua</button>
            <button type="button" class="filter" data-kategori="terpakai">Terpakai</button>
            <button type="button" class="filter" data-kategori="baru">Baru</button>
          </div>

          <button type="button" id="atur-ulang">Atur Ulang</button>

          <p id="muat" hidden>Memuat koleksi pakaian...</p>
          <p id="kosong" hidden>Tidak ada pakaian yang ditemukan.</p>
          <ul id="daftar" class="galeri"></ul>
        </section>

        <section id="katalog">
          <h2>Koleksi Pakaian</h2>
          <p>Pilih filter di bagian atas untuk melihat koleksi pakaian.</p>
        </section>

        <section id="tambah-pakaian">
          <h2>Tambah pakaian</h2>

          <form action="/simpan" method="post" class="form-kolom">
            <p>
              <label for="jenis">Jenis</label>
              <input type="text" id="jenis" name="jenis" required>
              <span class="pesan-galat">Kolom jenis wajib diisi dengan benar.</span>
            </p>

            <p>
              <label for="merk">Merk</label>
              <input type="text" id="merk" name="merk" required>
              <span class="pesan-galat">Kolom merk wajib diisi dengan benar.</span>
            </p>

            <p>
              <label for="status">Status</label>
              <input type="text" id="status" name="status" required>
              <span class="pesan-galat">Status harus berupa baru atau terpakai.</span>
            </p>

            <button type="submit">Simpan</button>
          </form>
        </section>
      </div>
    </main>

    <footer>
      <p>Safira Dhiyaunnafisah · 25523014 · 2026</p>
    </footer>
  </div>
</template>

<template>
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
</template>
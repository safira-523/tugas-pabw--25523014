<script setup>
// Menerima data profil dari induk (App.vue)
const props = defineProps({
  profil: { type: Object, required: true },
})
</script>

<template>
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
</template>
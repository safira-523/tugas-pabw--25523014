<script setup>
import { onMounted, computed } from 'vue'
import { profil } from './data.js' 
import { state, isiProyek, tambahFavorit } from './state.js' 
import { ambilProyek } from './api.js' 

import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

onMounted(async () => {
  try {
    const data = await ambilProyek() 
    isiProyek(data) 
  } catch (error) {
    console.error("Gagal memuat data:", error)
  }
})

const kartuTampil = computed(() => {
  if (state.kategoriAktif === 'semua') {
    return state.daftarProyek;
  }
  return state.daftarProyek.filter(p => p.status === state.kategoriAktif);
})
</script>

<template>
  <div class="page">
    
    <KepalaProfil :profil="profil" />
    
    <main class="isi">
      
      <DaftarProyek />

      <div class="utama">
        
        <section id="data" class="sorotan">
          <h2>Katalog Pakaian</h2>
          
          <TombolFilter />
          
          <p id="muat" v-if="state.memuat">Memuat koleksi pakaian...</p>
          <p id="kosong" v-else-if="kartuTampil.length === 0">Tidak ada pakaian yang ditemukan.</p>
          
          <ul v-else class="galeri">
            <li v-for="pakaian in kartuTampil" :key="pakaian.id" class="kartu">
              
              <div class="kartu__isi">
                <h3 class="kartu__judul">{{ pakaian.jenis }} {{ pakaian.merk }}</h3>
                <p>Koleksi {{ pakaian.jenis }} dari {{ pakaian.merk }}.</p>
              </div>
              
              <!-- Baris Status dan Tombol Bintang -->
              <div class="kartu__kaki">
                <p>Status: {{ pakaian.status }}</p>
                
                <button 
                  class="tombol-favorit" 
                  @click="tambahFavorit(pakaian.id)"
                  :style="state.favorit.includes(pakaian.id) ? 'color: #fff;' : 'color: transparent; -webkit-text-stroke: 1px #fff;'"
                >
                  ★
                </button>
              </div>
              
            </li>
          </ul>
        </section>

        <section id="katalog">
          <h2>Koleksi Pakaian</h2>
          <p>Pilih filter di bagian atas untuk melihat koleksi pakaian.</p>
        </section>

        <FormKontak />
        
      </div>
    </main>

    <footer>
      <p>Safira Dhiyaunnafisah · 25523014 · 2026</p>
    </footer>
    
  </div>
</template>
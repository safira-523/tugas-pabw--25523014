<script setup>
import { state, pilihKategori, aturUlang } from '../state.js'
</script>

<template>
  <div>
    <div id="filter">
      <button 
        type="button" 
        class="filter" 
        :class="{ aktif: state.kategoriAktif === 'semua' }"
        @click="pilihKategori('semua')"
      >
        Semua
      </button>
      <button 
        type="button" 
        class="filter" 
        :class="{ aktif: state.kategoriAktif === 'terpakai' }"
        @click="pilihKategori('terpakai')"
      >
        Terpakai
      </button>
      <button 
        type="button" 
        class="filter" 
        :class="{ aktif: state.kategoriAktif === 'baru' }"
        @click="pilihKategori('baru')"
      >
        Baru
      </button>
    </div>

    <button type="button" id="atur-ulang" @click="aturUlang()">Atur Ulang</button>
  </div>
</template>
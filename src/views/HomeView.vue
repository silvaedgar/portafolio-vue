<script setup>
import Home from '@/components/Home.vue';
import {  ref } from 'vue';

const homeActive = ref(true)

function toggleHome() {
   homeActive.value = !homeActive.value;
}

</script> 
<template>
  <main>
    <div v-if="homeActive">
      <Home @close="toggleHome" :homeActive="homeActive" />
    </div>
    <div class="container" v-if="!homeActive">
      <div class="homeInactive">
        <h3>Mostrar Información de Edgar Silva</h3>
        <button @click="toggleHome" type="button">
          Detalles
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>
.homeInactive {
  background-color: blue;
  text-align: center;
  color: white;

}
</style>


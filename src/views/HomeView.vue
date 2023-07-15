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
        <p>Hola, bienvenido soy Edgar R Silva G, vivo en Maracaibo-Venezuela, egresado como Licenciado en Computación en La Universidad del Zulia en el año de 1995. Soy programador freelance y docente universitario, carreras compartidas en mi quehacer profesional, con dedicación y responsabilidad. Soy un autodidacta al 100%; aficionado al deporte y fanatico del béisbol, fútbol y baloncesto. ¿Quieres saber mas de mi? <a @click="toggleHome"> Haz click aqui</a></p>
      </div>
    </div>
  </main>
</template>

<style scoped>
</style>


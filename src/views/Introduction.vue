<!-- <script setuo>
import Modal from "@/components/Modal.vue";
import { ref } from "vue";
export default {
  name: "Home",
  components: {
    Modal,
  },
  setup() {
    const homeActive = ref(true);

    const toggleModal = () => {
      homeActive.value = !homeActive.value;
    };

    return { homeActive, toggleModal };
  },
};
</script> -->

<script>
import Home from "@/components/Home.vue";
import { ref } from "vue";

export default {
  name: "Introduction",
  components: {
    Home,
  },
  setup() {
    const homeActive = ref(false);
    const toggleHome = () => {
      homeActive.value = !homeActive.value;
    };

    return { homeActive, toggleHome };
  },
};
</script>

<template>
  <main>
    <div v-if="homeActive">
      <Home @close="toggleHome" :homeActive="homeActive" />
    </div>
    <div class="container" v-if="!homeActive">
      <div class="homeInactive">
        <p>Hola, bienvenido soy Edgar R Silva G, vivo en Maracaibo-Venezuela, egresado como Licenciado en Computación en La Universidad del Zulia en el año de 1995. Soy programador freelance y docente universitario, carreras compartidas en mi quehacer profesional, con dedicación y responsabilidad. Soy un autodidacta al 100%; aficionado al deporte y fanatico del béisbol, fútbol y baloncesto. ¿Quieres saber mas de mi? <a @click="toggleHome"> Haz click aqui</a></p>
        <!-- <button class="btn-sm btn-primary w-30" @click="toggleHome" width="40%"> Ver detalles </button>  -->
      </div>
    </div>
  </main>
</template>

<style scoped>

.homeInactive {
  text-align: center;
  color: black;
  padding: 10px 50px 40px 50px;
  text-align: justify;
}

a {
  font-weight: bold;
  color: red;
  cursor: pointer;
}
.homeInactive p {
  font-weight: bold;
}
</style>

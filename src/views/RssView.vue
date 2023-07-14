<template>
  <main>
  <Modal @close="toggleModal" :modalActive="modalActive" />
  <div class="modalInactive" v-if="!modalActive">
    <h3>Componente que permite agregar Canales RSS y ver las noticios</h3>
    <button @click="toggleModal" class="btn-sm btn-primary">
      Abrir Canal
    </button>
  </div>
  </main>
</template>

<script>
import Modal from "@/components/rss/Modal.vue";
import { ref } from "vue";
export default {
  name: "Rss",
  components: {
    Modal,
  },
  setup() {
    const modalActive = ref(false);

    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };

    return { modalActive, toggleModal };
  },
};
</script>

<style scoped>
.modalInactive {
  background-color: blue;
  text-align: center;
  color: white;
  padding: 15px;
}

.modalInactive h3 {
  margin-bottom: 25px;
  font-weight: bold;
}
</style>

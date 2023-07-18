<script >

// const emit = defineEmits(['close','save']);
// const props = defineProps({modalActive: { type: Boolean}});

// function close() {
//   console.log("CLOSE ")
//   emit('close')
// }

// function save() {
//   console.log("SAVE ")
//   emit('save')
// }

export default {
  props: ["modalActive","isValidForm"],
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };
    const save = () => {
      emit("save");
    };

    return { close, save };
  },
};
</script>

<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal">
      <transition name="modal-animation-inner">
        <div v-show="modalActive" class="modal-inner">
          <i @click="close" class="far fa-times-circle"></i>
          <!-- Modal Content -->
          <slot />
          <div class="buttons">
            <button @click="save" :class="['btn', isValidForm ? 'btn-primary' : ' btn-disabled']" :disabled="!isValidForm" >Grabar Producto</button>
            <button @click="close" class="btn btn-close">Cerrar</button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<style scoped>
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}

.modal-animation-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-animation-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-animation-inner-leave-to {
  transform: scale(0.8);
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  /* background-color: rgba(255, 255, 255, 0.7); */
  background-color: rgba(128, 128, 128, 0.8);
}

.modal-inner {
  position: relative;
  max-width: 640px;
  width: 80%;
  /* box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06); */
  box-shadow: -5px 0px rgba(128, 255, 255, 0.3);

  background-color: white;
  padding: -10px -10px 150px 150px;
}

i {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 20px;
  cursor: pointer;
}
i:hover {
  color: crimson;
}

.buttons {
  display: flex;
  justify-content: center;
  margin: 15px;
  gap: 10px;
  /* box-shadow: -5px -5px rgba(128, 255, 255, 0.3); */
}
</style>

<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal">
      <HeaderRss />
      <SidebarRss>
        <div class="btn">
          <button @click="close" class="btn-sm btn-primary">Volver al Menu</button>
        </div>
      </SidebarRss>
      <PostsRss />
    </div>
  </transition>

</template>

<script>
import HeaderRss from "@/components/rss/HeaderRss.vue";
import PostsRss from "@/components/rss/PostsRss.vue";
import SidebarRss from "@/components/rss/SidebarRss.vue";

export default {
  components: {
    HeaderRss,
    SidebarRss,
    PostsRss,
    SidebarRss,
  },
  props: ["modalActive"],
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };

    return { close };
  },
};
</script>

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
  position: fixed;
  left: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-areas:
    "header header"
    "sidebar content";
  height: 100vh;
}

.btn {
  text-align: right;
}
</style>

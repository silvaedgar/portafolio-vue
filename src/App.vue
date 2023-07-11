<script>
import { RouterLink, RouterView } from "vue-router";
import Sidebar from "./components/menu/Sidebar.vue";

export default {
  components: {
    Sidebar,
  },
};
</script>

<template>
  <header>
    <Sidebar />
  </header>
</template>

<style></style>

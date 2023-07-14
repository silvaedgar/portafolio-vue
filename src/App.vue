<script>
import Sidebar from "./components/layouts/Sidebar.vue";

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

<style>

.btn-sm {
  border-radius: 3px;
  box-shadow: 2px 2px rgba(0,0,255,0.3);
  padding: 10px;
  cursor: pointer;
}

.btn-primary {
  background-color: #67b588;
  color: white;
}

.w-30 {
  min-width: 5%;
}
</style>

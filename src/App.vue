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
  border: #67b588 1px solid;
}

.w-30 {
  min-width: 5%;
}

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

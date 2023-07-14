<script setup>
import { ref } from "vue";
import { feedStore } from "@/stores/storeRss";

const url = ref("");
const storeRss = feedStore();

function handleSubmit() {
  if (url.value) {
    storeRss.registerNewSource(url);
  }
}
</script>
<template>
  <div class="header">
    <form action="" @submit.prevent="handleSubmit()">
      <input type="url" required v-model="url" />
      <button type="submit">Agregar Canal</button>
    </form>
  </div>
</template>

<style scoped>
.header {
  position: fixed;
  height: 50px;
  left: 0;
  top: 0;
  width: 100%;
  background-color: black;
  grid-area: header;
  justify-self: stretch;
  display: flex;
  justify-content: center;
  padding: 10px;
}

form {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;
}

input {
  border: none;
  width: 400px;
  padding: 10px;
}

button {
  border: none;
  background-color: #1283a9;
  color: white;
  padding: 5px 10px;
}

button:hover {
  cursor: pointer;
}
</style>

<script setup>
import { ref } from "vue";
import { feedStore } from "../../stores/storeRss";

const url = ref("")
const storeRss = feedStore()

function handleSubmit() {

   if (url.value) {
      storeRss.registerNewSource(url)
   }
}
</script>
<template>
  <form action="" @submit.prevent="handleSubmit()">
    <input type="url" required v-model="url" />
    <button type="submit">Agregar Canal</button>
  </form>
</template>
<style scoped></style>

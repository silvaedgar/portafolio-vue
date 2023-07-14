<script setup>
import { feedStore } from "@/stores/storeRss";

const storeRss = feedStore();

function handleClick(source) {
  storeRss.loadSource(source);
}
</script>

<template>
  <div class="sidebar">
    <slot />
    <div v-for="(source, index) in storeRss.sources" :key="index">
      <a href="#" @click.prevent="() => handleClick(source)">{{
        source.name
      }}</a>
    </div>
  </div>
</template>
<style scoped>
.sidebar {
  left: 0;
  background-color: #ccc;
  height: 100vh;
  text-align: left;
  margin-top: 25px;
}

.sidebar div {
  width: 100%;
  margin-top: 5%;
}

.sidebar div:hover {
  background-color: cyan;
  color: white;
}


a {
  color: black;
}

</style>

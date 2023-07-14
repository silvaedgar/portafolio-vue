<script setup>
import { feedStore } from "@/stores/storeRss";

const storeRss = feedStore();
</script>

<template>
  <div class="content">
    <h3> {{ storeRss.current.source != null ? storeRss.current.source.name :'' }} </h3>
    <details v-for="post in storeRss.current.items" :key="post.item">
      <summary>{{ post.title }}</summary>
      <div v-html="post.content"></div>
    </details>
  </div>
</template>
<style scoped>
.content {
  background-color: #ccc;
  height: 100vh;
  text-align: left;
  margin-top: 25px;
  justify-self: stretch;
  background-color: white;
  padding: 5px;
  overflow: scroll;
}

.content h3 {
  background-color: blue;
  color: white;
  text-align: center;
  font-weight: bold;
}

details {
  padding: 3px 10px;
}
summary {
  cursor: pointer;
  border-radius: 3px;
}

summary:hover {
  background-color: black;
  color: white;
}

details div {
  background-color: #f0f0f0;
  color: black;
}
</style>

<style>
img,
figure {
  margin: 0 auto;
  max-width: min(100%, 450px);
  max-height: min(100%, 450px);
  display: block;
  padding: 15px;
}

a {
  color: red;
}
</style>

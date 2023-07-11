<script setup>
import { RouterView } from "vue-router";

const props = defineProps(["item", "collapsed"]);
</script>

<template>
  <RouterLink :to="props.item.link">
    <div class="item">
      <div class="icon">
        <font-awesome-icon :icon="['fa-solid', props.item.icon]" />
      </div>
      <div class="title" v-if="!collapsed">{{ props.item.title }}</div>
    </div>
  </RouterLink>
</template>

<style scoped>
a {
  color: white;
  text-decoration: none;
  display: block;
}

.item {
  display: flex;
  background-color: transparent;
  margin: 0px;
  align-items: center;
  gap: 5px;
  padding: 10px;
}

.item:hover {
  background-color: black;
}

@media (max-width: 1000px) {
  .title {
    display: none;
  }
}
</style>

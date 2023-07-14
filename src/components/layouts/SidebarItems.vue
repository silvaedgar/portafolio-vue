<script setup>
import { RouterView } from "vue-router";

const props = defineProps(["item", "collapsed"]);

</script>

<template>
  <a ><RouterLink :to="props.item.link" :title="props.item.title" >
    <div class="item" @click="verify">
      <div class="icon">
        <font-awesome-icon :icon="['fa-solid', props.item.icon]" />
      </div>
      <div class="title" v-if="!collapsed">{{ props.item.title }} </div>
    </div>
  </RouterLink></a>
</template>

<style scoped>
a {
  color: white;
  text-decoration: none;
  display: block;
}

/* a:link {
  background-color: #67b588;
} */


.item {
  display: flex;
  background-color: transparent;
  margin: 0px;
  align-items: center;
  gap: 5px;
  padding: 10px;
}

a:focus {
  background: black;
  color: white;
}
.item:hover {
  background-color: black;
  color: white;
}


@media (max-width: 1000px) {
  .title {
    display: none;
  }
}
</style>

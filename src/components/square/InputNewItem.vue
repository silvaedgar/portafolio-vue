<template>
  <div class="new-item">
    <form action="" @submit.prevent="handleSubmit">
      <input type="text" v-model="newItem" />
    </form>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const newItem = ref("");
const emits = defineEmits(["createNewItem"]);
function handleSubmit() {
  emits("createNewItem", newItem);
  newItem.value = "";
}
</script>

<style scoped>
.new-item {
  padding: 10px;
}
</style>

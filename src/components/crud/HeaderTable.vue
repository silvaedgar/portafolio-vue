<script setup>
const props = defineProps(["header"]);
</script>

<template>
  <th>{{ props.header }}</th>
</template>

<style scoped>

th {
  font-weight: bolder;
}
</style>

<script setup>
import { strToNumber } from "../../stores/storeNumberFormat";


const props = defineProps(["product", "index"]);

const emit = defineEmits(["edit", "delete"]);

function edit() {
  emit("edit");
}

function erase() {
  emit("delete");
}
</script>

<template>
  <tr>
    <td>
      {{ index + 1 }}
    </td>
    <td>{{ props.product.code }}</td>
    <td>{{ props.product.name }}</td>
    <td>
      {{
        new Intl.NumberFormat("es-VE", {
          currency: "BsD",
          style: "currency",
        }).format(strToNumber(props.product.cost))
      }}
      <!-- {{  }} -->
    </td>
    <td>
      {{
        new Intl.NumberFormat("es-VE", {
          currency: "BsD",
          style: "currency",
        }).format(strToNumber(props.product.sale))
      }}
    </td>
    <td>
      <button class="btn-sm btn-primary" @click="edit">Editar</button>
      <button class="btn-sm btn-red" @click="erase">Eliminar</button>
    </td>
  </tr>
</template>

<style scoped>
.btn-blue {
  background-color: #6767f5;
}

.btn-blue:hover {
  background-color: #9494f8;
}

.btn-red {
  background-color: red;
  color: #fff;
}

.btn-red:hover {
    background-color: #e77e7e;
/* 
  background-color: rgb(238, 122, 122); */
}

.btn-red:focus {
    background-color: #e77e7e;
 outline-offset: 3.5px;
  outline-color: blue;
 
}

td {
  width: auto;
  text-align: center;
  border: 1px solid black;
}
tr {
  border: 1px solid black;
}

tr:nth-child(even) {
  background-color: aquamarine;
}
tr:hover {
  background-color: #a0a0a0;
}
</style>

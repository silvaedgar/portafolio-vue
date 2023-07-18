<script setup>
import { reactive, ref } from "vue";
import InputNewItem from "./InputNewItem.vue";

let boards = reactive([
  {
    id: crypto.randomUUID(),
    name: "Tablero 1",
    items: [
      {
        id: crypto.randomUUID(),
        title: "Features de Archivo",
      },
      {
        id: crypto.randomUUID(),
        title: "Resolver Bug",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Tablero 2",
    items: [
      {
        id: crypto.randomUUID(),
        title: "Enviar Reporte",
      },
      {
        id: crypto.randomUUID(),
        title: "Revisión de Codigo",
      },
    ],
  },
]);

function addNewItem(newItem, board) {
  if (newItem.value != "") {
    let newItemBoard = reactive({
      id: crypto.randomUUID(),
      title: newItem.value,
    });
    board.items.push(newItemBoard);
  }
}

function createBoard() {
  const labelBoard = prompt("Ingrese el Nombre del Tablero");

  const existBoard = boards.find(
    (board) => board.name.toLocaleUpperCase() == labelBoard.toLocaleUpperCase()
  );
  if (existBoard) alert("Nombre de Tablero Existe");
  else if (labelBoard) {
    boards.push({
      id: crypto.randomUUID(),
      name: labelBoard,
      items: ref([]),
    });
  }
}

function startDrag(e, board, item) {
  e.dataTransfer.setData(
    "text/plain",
    JSON.stringify({ boardId: board.id, itemId: item.id })
  );
}

function onDrop(e, destino) {
  // para que funcione el drag and drop en el llamado del drop hay que colocar el dragover.prevent y el dragenter.prevent (bueno sin el dragenter funciono)
  const { boardId, itemId } = JSON.parse(e.dataTransfer.getData("text/plain"));

  const sourceBoard = boards.find((board) => board.id == boardId);
  const sourceItem = sourceBoard.items.find((item) => item.id == itemId);

  destino.items.push({ ...sourceItem });
  sourceBoard.items = sourceBoard.items.filter((item) => item != sourceItem);
}

function deleteBoard(boardCurrent) {
  if (
    confirm(
      "Seguro de Eliminar el Tablero identificado como " + boardCurrent.name
    )
  ) {
    let indexBoard = boards.findIndex((board) => boardCurrent.id == board.id);
    boards.splice(indexBoard, 1);
  }
}
</script>

<template>
  <div>
    <nav class="nav">
      <ul style="margin-top:30px">
        <li><a href="#" @click="createBoard">Crear Tablero</a></li>
      </ul>
    </nav>
    <div class="boards-container">
      <div class="boards">
        <div
          class="board"
          v-for="board in boards" :key="board.id"
          @drop="onDrop($event, board)"
          @dragover.prevent
          @dragenter.prevent
        >
          <div class="board-name">
            {{ board.name }} <button @click="deleteBoard(board)">X</button>
          </div>
          <InputNewItem
            @create-new-item="(newItem) => addNewItem(newItem, board)"
          />
          <div class="items">
            <div
              class="item"
              v-for="item in board.items" :key="item.id"
              draggable="true"
              @dragstart="startDrag($event, board, item)"
            >
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.nav {
  background-color: black;
  margin-bottom: 10px;
}

.nav ul {
  list-style-type: none;
  line-height: 25px;
  text-align: center;
}

.nav ul li a {
  color: #ffffff;
}

.nav ul li a:hover {
  color: yellow;
}

.boards {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 30px;
}

.board {
  background-color: #ffffff;
  border: #a0a0a0 solid 1px;
}

.board-name {
  padding: 5px 0px 5px 0px;
  text-align: center;
  background-color: #a0a0a0;
  font-weight: bold;
  text-transform: capitalize;
}

.items {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
}

.item {
  background-color: darkgray;
  padding: 5px;
  box-sizing: border-box;
  text-align: center;
}

@media (max-width: 500px) {
  .boards {
    display: block;
    padding: 0px 25px 0px 25px;
    justify-content: center;
  }

  .board {
    margin-top: 10px;
  }
}
</style>

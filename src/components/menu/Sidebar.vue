<script setup>
import { ref } from "vue";
import menuItems from "../menuItem";
import SidebarItems from "./SidebarItems.vue";

const itemClose = ref({
  title: "Cerrar Sesion",
  icon: "fa-arrow-right-from-bracket",
  link: "/",
});

const collapsed = ref(false);
</script>

<template>
  <div :class="['menu', collapsed ? 'collapsed' : 'expanded']">
    <div class="header">
      <button class="menu-button" @click="collapsed = !collapsed">
        <font-awesome-icon icon="fa-solid fa-bars" />
      </button>
    </div>
    <div class="profile">
      <img :src="menuItems.profile.image" alt="picture" />
      <div class="profile-name" v-if="!collapsed">
        {{ menuItems.profile.name }}
      </div>
    </div>

    <div class="sidebar-items">
      <ul>
        <SidebarItems
          v-for="item in menuItems.items"
          :item="item"
          :collapsed="collapsed"
        />
      </ul>
      <ul v-if="collapsed">
        <SidebarItems :item="itemClose" :collapsed="collapsed" />
      </ul>
    </div>
  </div>

  <div :class="collapsed ? 'content-collapsed' : 'content-expanded'">
    <RouterView />
  </div>
</template>

<style scoped>
body {
  margin: 0;
}
.menu {
  display: block;
  position: absolute;
  background-color: #67b588;
  height: calc(max-content);
  min-height: 100vh;
  /* overflow-y: auto; */
  padding: 15px;
  transition: width 0.3s;
  font-family: Arial, Helvetica, sans-serif;
}

.header {
  display: flex;
  justify-content: end;
}

.profile {
  padding: 2px;
  text-align: center;
}
.profile img {
  border-radius: 50%;
  min-width: 50px;
  max-width: 150px;
  width: 100%;
  place-self: center;
}

.collapsed {
  width: 80px;
}

.expanded {
  width: 200px;
}

.menu-button {
  border: none;
  background-color: transparent;
  color: white;
  padding: 5px;
}

.menu-button:hover {
  background-color: white;
  color: #67b588;
  cursor: pointer;
}

.sidebar-items ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.content-expanded {
  position: relative;
  margin-left: 200px;
  width: calc(100% - 200px);
  height: calc(100vh - 8%);
  padding: 1.5rem 0.3rem 0 0.5rem;
  transition: 0.4ms;
}

.content-collapsed {
  position: relative;
  margin-left: 80px;
  width: calc(100% - 80px);
  height: calc(100vh - 8%);
  padding: 1.5rem 0.3rem 0 0.5rem;
  transition: 0.4ms;
}

@media (max-width: 1000px) {
  .expanded {
    width: 80px;
  }

  .profile-name {
    display: none;
  }

  .content-expanded {
    position: relative;
    margin-left: 80px;
    width: calc(100% - 80px);
    height: calc(100vh - 8%);
    padding: 1.5rem 0.3rem 0 0.5rem;
  }
}
</style>

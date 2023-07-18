<script>
import Sidebar from "./components/layouts/Sidebar.vue";

export default {
  components: {
    Sidebar,
  },
};

</script>

<template>
  <header>
    <Sidebar />
  </header>
</template>

<style>

.btn-sm {
  border-radius: 3px;
  box-shadow: 2px 2px rgba(0,0,255,0.3);
  padding: 10px;
  cursor: pointer;
  margin: 3px 5px 3px 0px;
}

.btn-primary {
  /* background-color: #67b588; */
  min-width: 25%;
  background-color: blue;
  color: white;
  border: blue 1px solid;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #9494f8;
  border: #9494f8 1px solid;
}

.btn-primary:focus {
  background-color: #9494f8;
  border: #9494f8 1px solid;
  outline-offset: 3.5px;
  outline-color: red;
}

.btn-disabled:focus {
  background-color: rgb(172, 170, 170);
  color: rgb(104, 98, 98)
}

.btn-disabled {
  background-color: rgb(172, 170, 170);
  color: rgb(104, 98, 98)
}


/* .btn-save {
  padding: 20px 30px;
  border: none;
  font-size: 16px;
  background-color: blue;
  color: #fff;
  cursor: pointer;
}

.btn-save:hover {
  background-color: #005fff;
  color: #fff;
  cursor: pointer;
} */


.btn-close {
  min-width: 25%;
  height: auto;
  padding: 20px 30px;
  border: none;
  background-color: crimson;
  color: #fff;
  cursor: pointer;
  text-align: center;
}

.btn-close:hover {
  background-color: #e77e7e;
  color: #fff;
  cursor: pointer;
}


.w-30 {
  min-width: 5%;
}

.homeInactive {
  text-align: center;
  color: black;
  padding: 10px 50px 40px 50px;
  text-align: justify;
}

a {
  font-weight: bold;
  color: red;
  cursor: pointer;
}

.homeInactive p {
  font-weight: bold;
}

.header-message {
  text-align: center;
  margin: 30px;
  background-color: aquamarine;
  padding: 10px
  /* font-weight: bold; */
}

.header-message h3 {
  /* text-align: center;
  margin: 30px;
  background-color: aquamarine; */
  font-weight: bold;

}

.message-error {
  color: red;
  font-size: 12px;
}
</style>

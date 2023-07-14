<script setup>
import { ref } from "vue";

const props = defineProps(["homeActive"]);
defineEmits(["close"]);

const languages = ref([
  {
    skill: "BackEnd",
    language: ["PHP (FrameWork Laravel)", "SpringBoot"],
  },
  {
    skill: "FrontEnd",
    language: ["Vue", "Angular"],
  },
  {
    skill: "Otros Lenguajes",
    language: ["Cobol", "Visual Fox Pro"],
  },
]);

const sgbd = ref(["MySQL", "PostgreSQL"]);

const contacto = ref([
  {
    id: 1,
    icon: "/public/image/cellphone.jpg",
    title: "+58-412-6501415",
    link: "",
  },
  {
    id: 4,
    icon: "/public/image/gmail.jpg",
    title: "silvaed72@gmail.com",
    link: "",
  },
  {
    id: 2,
    icon: "/public/image/linkedin.jpg",
    title: "",
    link: "https://www.linkedin.com/in/edgar-r-silva-g/",
  },
  {
    id: 3,
    icon: "/public/image/github.jpg",
    title: "",
    link: "https://github.com/silvaedgar",
  },
]);
</script>

<template>
  <main v-show="homeActive">
    <div class="aside-left">
      <div class="name">
        Edgar R Silva G
        <div class="programmer">
          Programador Full Stack <br />
          Docente
        </div>
        <div class="message">
          Distribuir el tiempo entre la programación y la docencia ha sido un
          placer. Desde mi grado(hace ya mas de 25 años) liderar y desarrollar
          proyectos de programación, en conjunto con dar clases las he ejercido
          con pasión, dedicación y responsabilidad.
        </div>
      </div>
    </div>
    <div class="aside-right">
      <div class="skills">
        Lenguajes de Programacion
        <a href="#" class="example" @click="$emit('close')">Ver Ejemplo</a>
        <div class="details">
          <ul v-for="language in languages" :key="language.skill">
            {{
              language.skill
            }}
            <li v-for="skill in language.language" :key="skill">{{ skill }}</li>
          </ul>
        </div>
      </div>
      <div class="dbms">
        Bases de Datos
        <ul v-for="dbms in sgbd" :key="dbms" class="details">
          <li>{{ dbms }}</li>
        </ul>
      </div>
      <div class="contacto">
        Contacto
        <div class="links">
          <div v-for="picture in contacto" :key="picture.id">
            <a :href="picture.link" v-if="picture.link" target="_blank">
              <img :src="picture.icon" width="20" height="20" />
            </a>
            <img
              :src="picture.icon"
              width="20"
              height="20"
              v-if="!picture.link"
            />
            <span style="font-weight: bolder;">
              {{ picture.title }} 
            </span>
          </div>
        </div>
      </div>
      <div class="paragraph">
        <p style="margin-left: 30%">
          La parte más importante de la educación del hombre es aquella que él
          mismo se da(Walter Scott)
        </p>
      </div>
    </div>

    <div class="image-profile">
      Autodidácta al 100% <br />
      <img src="/public/image/picture.jpg" width="200" height="200" />
    </div>
  </main>
</template>

<style scoped>
.contacto {
  margin-left: 20%;
  font-size: x-large;
  font-style: italic;
  font-weight: bolder;
  z-index: 15;
}

.links {
  display: flex;
  gap: 3%;
  font-size: small;
  font-weight: bolder;
}

.links div {
  display: flex;
  align-items: center;
  gap: 3px;
}

main {
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: visible;
}

.name {
  font-size: xx-large;
  font-style: italic;
  font-weight: bolder;
  font-variant: normal;
  margin-left: 5%;
  margin-top: 5%;
}

.message {
  margin: 15% 25% 0% 0%;
  font-size: large;
  font-weight: bold;
  text-align: justify;
}

.skills {
  font-size: x-large;
  font-style: italic;
  font-weight: bolder;
  margin-left: 5%;
  margin-top: 1%;
}

.skills div {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1.5fr;
  gap: 5px;
}

.skills div ul {
  left: 0;
  font-size: large;
  font-weight: bolder;
}

.details {
  font-size: large;
  list-style: none;
}

.dbms {
  text-align: right;
  padding-right: 5%;
  font-size: x-large;
  font-style: italic;
  font-weight: bolder;
}

.programmer {
  font-weight: bold;
  margin-left: 5%;
  margin-top: 15%;
  text-align: center;
  padding-right: 45%;
}

.aside-left {
  background-color: #1ad6d6;
  height: 100vh;
  display: grid;
  grid-template-rows: 3;
}

.aside-right {
  background-color: #d9eb3c;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
}

.image-profile {
  position: absolute;
  top: 35%;
  width: 100%;
  text-align: center;
  font-size: large;
  font-weight: bold;
}

.aside-left p {
  padding: 5%;
  padding-top: 25%;
  padding-right: 30%;
  font-size: large;
  font-weight: bold;
}

li {
  list-style: none;
}

.paragraph {
  top: 0;
  margin-right: 20%;
  font-size: large;
  font-weight: bold;
}

.example {
  font-size: small;
  text-decoration: none;
}

@media (max-width: 750px) {
  .main {
    overflow: scroll;
  }
  .aside-left {
    height: 125%;
    overflow: scroll;
  }

  .aside-right {
    height: 126vh;
  }

  .paragraph {
    margin-left: 10%;
  }
  .image-profile {
    display: absolute;
    top: 40%;
    z-index: 12;
  }
  .skills div {
    display: grid;
    grid-template-columns: 150px 1fr 150px;
    gap: 5px;
  }

  .contacto {
    margin-left: 40%;
  }
}
</style>

import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faBars,
  faFire,
  faScrewdriverWrench,
  faHouse,
  faArrowRightFromBracket,
  faTag,
  faSquarePollVertical,
  faMoneyBills,
  faRss,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faBars);
library.add(faScrewdriverWrench);
library.add(faFire);
library.add(faHouse);
library.add(faArrowRightFromBracket);
library.add(faTag);
library.add(faSquarePollVertical);
library.add(faMoneyBills);
library.add(faRss);

import App from "./App.vue";
import router from "./router";

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);

// app.config.globalProperties.collapsed = false;

app.use(createPinia());
app.use(router);

app.mount("#app");

export const nameApp = import.meta.env.VITE_NAME_APP;
console.log("MAIN.JS");

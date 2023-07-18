import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      // component: () => import("../views/HomeView.vue"),

    },
    {
      path: "/home",
      name: "home-view",
      component: () => import("../views/Introduction.vue"),
    },
    {
      path: "/tags",
      name: "tags",
      component: () => import("../views/TagView.vue"),
    },
    {
      path: "/square",
      name: "square",
      component: () => import("../views/SquareView.vue"),
    },
    {
      path: "/bill",
      name: "bill",
      component: () => import("@/views/BillView.vue"),
    },
    {
      path: "/rss",
      name: "rss",
      component: () => import("@/views/RssView.vue"),
    },
    {
      path: "/crud",
      name: "crud",
      component: () => import("../views/CrudView.vue"),
    },
    {
      path: "/:notFound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;

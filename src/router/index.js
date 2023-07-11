import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
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
      component: () => import("../views/BillView.vue"),
    },
    // {
    //   path: "/rss",
    //   name: "rss",
    //   // component: () => import("../views/RssView.vue"),
    // },

    {
      path: "/:notFound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;

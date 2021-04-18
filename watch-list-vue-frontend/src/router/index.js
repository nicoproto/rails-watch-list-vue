import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import MoviesIndex from "../views/movies/MoviesIndex.vue";
import MoviesNew from "../views/movies/MoviesNew.vue";
import MoviesShow from "../views/movies/MoviesShow.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/movies",
    component: MoviesIndex,
  },
  {
    path: "/movies/:id",
    component: MoviesShow,
  },
  {
    path: "/movies/new",
    component: MoviesNew,
  },
  {
    path: "/:notFound(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

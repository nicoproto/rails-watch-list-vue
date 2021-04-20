import { createStore } from "vuex";

import moviesModule from "./modules/movies/index.js";

export default createStore({
  modules: {
    movies: moviesModule,
  },
});

import { createStore } from "vuex";

import moviesModule from "./modules/movies/index.js";
import listsModule from "./modules/lists/index.js";

export default createStore({
  modules: {
    movies: moviesModule,
    lists: listsModule,
  },
});

<template>
  <div>
    <base-dialog :show="!!error" title="An error ocurred!" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <movie-filter @change-filter="setFilters"></movie-filter>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadMovies(true)">Refresh</base-button>
          <base-button link to="/movies/new">Add new movie</base-button>
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasMovies">
          <movie-item v-for="movie in filteredMovies"
            :key="movie.id"
            :id="movie.id"
            :rating="movie.rating"
            :title="movie.title"
            :poster_url="movie.poster_url"
            ></movie-item>
        </ul>
        <h3 v-else>No movies found.</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import MovieItem from "../../components/movies/MovieItem.vue"
import MovieFilter from "../../components/movies/MovieFilter.vue"

export default {
  components: {
    MovieItem,
    MovieFilter
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        "high-rating": true,
        "mid-rating": true,
        "low-rating": true,
      }
    }
  },
  computed: {
    filteredMovies() {
      const movies = this.$store.getters["movies/movies"];
      return movies.filter(movie => {
        if (this.activeFilters["high-rating"] && (movie.rating > 8)) {
          return true;
        }
        if (this.activeFilters["mid-rating"] && (movie.rating > 5 && movie.rating <= 8)) {
          return true;
        }
        if (this.activeFilters["low-rating"] && (movie.rating <= 5)) {
          return true;
        }
      })
    },
    hasMovies() {
      return !this.isLoading && this.$store.getters["movies/hasMovies"]
    },
  },
  created() {
    this.loadMovies();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadMovies(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("movies/loadMovies", { forceRefresh: refresh})
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
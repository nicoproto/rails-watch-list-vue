<template>
  <div>
    <section>
      <movie-filter @change-filter="setFilters"></movie-filter>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline">Refresh</base-button>
          <base-button link to="/movies/new">Add new movie</base-button>
        </div>
        <ul v-if="hasMovies">
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
      return this.$store.getters["movies/hasMovies"]
    }
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    }
  }
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
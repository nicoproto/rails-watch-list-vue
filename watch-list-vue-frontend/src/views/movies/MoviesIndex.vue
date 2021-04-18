<template>
  <div>
    <section>FILTER</section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline">Refresh</base-button>
          <base-button link to="/movies/new">Add new movie</base-button>
        </div>
        <ul v-if="hasMovies">
          <movie-item v-for="movie in filteredMovies"
            :key="movie.id"
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

export default {
  components: {
    MovieItem
  },
  computed: {
    filteredMovies() {
      return this.$store.getters["movies/movies"];
    },
    hasMovies() {
      return this.$store.getters["movies/hasMovies"]
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
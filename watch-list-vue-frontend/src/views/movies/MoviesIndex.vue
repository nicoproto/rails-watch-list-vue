<template>
  <div>
    <section>FILTER</section>
    <section>
      <div class="controls">
        <button>Refresh</button>
        <router-link to="/movies/new">Add new movie</router-link>
      </div>
      <ul v-if="hasMovies">
        <li v-for="movie in filteredMovies" :key="movie.id">
          {{ movie.title }}
        </li>
      </ul>
      <h3 v-else>No movies found.</h3>
    </section>
  </div>
</template>

<script>
export default {
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

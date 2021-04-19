<template>
  <div>
    <section>
      <base-card>
        <h2>{{ title }}</h2>
        <h3>Rating: {{ rating }} stars</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h3>Actions:</h3>
          <base-button link :to="editLink">Edit</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card class="movie-info">
        <img :src="poster_url" />
        <p>{{ overview }}</p>
      </base-card>
    </section>
  </div>
</template>

<script>
import BaseButton from '../../components/ui/BaseButton.vue';
export default {
  components: { BaseButton },
  props: ["id"],
  data() {
    return {
      selectedMovie: null,
    };
  },
  created() {
    this.selectedMovie = this.$store.getters['movies/movies'].find(movie => movie.id === this.id);
  },
  computed: {
    editLink() {
      return this.$route.path + "/edit";
    },
    title() {
      return this.selectedMovie.title;
    },
    overview() {
      return this.selectedMovie.overview;
    },
    poster_url() {
      return this.selectedMovie.poster_url;
    },
    rating() {
      return this.selectedMovie.rating;
    },
  },
};
</script>

<style scoped>
img {
  height: 150px;
  margin-right: 1rem;
}

.movie-info {
  display: flex;
}
</style>

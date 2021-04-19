<template>
  <div>
    <section>
      <base-card>
        <h2>{{ selectedMovie.title }}</h2>
        <h3>Rating: {{ selectedMovie.rating }} stars</h3>
      </base-card>
    </section>
    <section>
      <base-card class="movie-info">
        <img :src="selectedMovie.poster_url" />
        <p>{{ selectedMovie.overview }}</p>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h3>Actions:</h3>
          <base-button link :to="editLink">Edit</base-button>
          <base-button @click="destroyMovie">Destroy</base-button>
        </header>
        <router-view></router-view>
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
      selectedMovie: "",
    };
  },
  created() {
    this.loadMovie();
    console.log(this.selectedMovie);
  },
  computed: {
    editLink() {
      return this.$route.path + "/edit";
    },
    destroyLink() {
      return this.$route.path;
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
  methods: {
    async loadMovie() {
      try {
        await this.$store.dispatch("movies/loadMovie", {id: this.id});
        this.selectedMovie = this.$store.getters["movies/selectedMovie"]
      } catch (error) {
        console.log(error);
      }
      console.log(this.selectedMovie);
    },
    async destroyMovie() {
      try {
        this.$store.dispatch("movies/destroyMovie", { id: this.id })
        this.$router.replace("/movies");
      } catch (error) {
        console.log(error);
      }
    }
  }
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

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
          <base-button @click="removeMovie">Destroy</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
  </div>
</template>

<script>
// TODO: Add confirmation on destroy
import BaseButton from '../../components/ui/BaseButton.vue';
import { mapGetters, mapActions } from "vuex";

export default {
  components: { BaseButton },
  props: ["id"],
  data() {
    return {
      selectedMovie: "",
    };
  },
  created() {
    this.setMovie();
  },
  computed: {
    ...mapGetters({
      selectedStoreMovie: "movies/selectedMovie"
    }),
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
    ...mapActions({
      loadMovie: "movies/loadMovie",
      destroyMovie: "movies/destroyMovie"
    }),
    async setMovie() {
      try {
        await this.loadMovie({id: this.id});
        this.selectedMovie = this.selectedStoreMovie;
      } catch (error) {
        console.log(error);
      }
    },
    async removeMovie() {
      try {
        this.destroyMovie({ id: this.id });
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

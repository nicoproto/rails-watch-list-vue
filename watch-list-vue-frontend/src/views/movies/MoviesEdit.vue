<template>
  <div>
    <base-dialog :show="!!error" title="An error ocurred!" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <base-card>
        <h2>Add a Movie</h2>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <movie-form v-else @save-data="saveData"
          :populateWith="selectedMovie"
        ></movie-form>
      </base-card>
    </section>
  </div>
</template>

<script>
import MovieForm from "../../components/movies/MovieForm.vue";

export default {
  props: ["id"],
  components: {
    MovieForm
  },
  data() {
    return {
      isLoading: false,
      error: null,
      selectedMovie: "",
    }
  },
  methods: {
    async saveData(data) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("movies/registerMovie", data);
        this.$router.replace("/movies");
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
    async loadMovie() {
      // this.isLoading = true;
      try {
        await this.$store.dispatch("movies/loadMovie", {id: this.id});
        this.selectedMovie = this.$store.getters["movies/selectedMovie"]
      } catch (error) {
        console.log(error);
        // this.error = error.message || 'Something went wrong!';
      }
      // this.isLoading = false;
      console.log(this.selectedMovie);
    },
  },
  created() {
    this.loadMovie();
  },
}
</script>
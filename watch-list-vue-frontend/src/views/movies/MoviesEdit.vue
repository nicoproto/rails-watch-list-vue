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
          :movieValues="{...selectedMovie}"
        ></movie-form>
      </base-card>
    </section>
  </div>
</template>

<script>
// FIXME: When you reload the page you lose the info
import MovieForm from "../../components/movies/MovieForm.vue";
import { mapGetters } from 'vuex'
export default {
  props: ["id"],
  components: {
    MovieForm
  },
  data() {
    return {
      isLoading: false,
      error: null,
    }
  },
  computed: {
    ...mapGetters({
      selectedMovie: "movies/selectedMovie"
    })
  },
  methods: {
    async saveData(data) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("movies/updateMovie", data);
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
      // TODO: Add loader for this
      // this.isLoading = true;
      try {
        await this.$store.dispatch("movies/loadMovie", {id: this.id});
      } catch (error) {
        console.log(error);
        // this.error = error.message || 'Something went wrong!';
      }
      // this.isLoading = false;
    },
  },
  created() {
    this.loadMovie();
  },
}
</script>
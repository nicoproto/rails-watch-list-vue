<template>
  <section>
    <base-card>
      <h2>Add a Movie</h2>
      <movie-form></movie-form>
    </base-card>
  </section>
</template>

<script>
import MovieForm from "../../components/movies/MovieForm.vue";

export default {
  components: {
    MovieForm
  }
}
</script>
<template>
  <div id="app">
    <div class="container">
      <h1>Watch List Manager</h1>
      <Movies />
    </div>
  </div>
</template>

<script>
import Movies from './components/Movies.vue';

export default {
  name: "App",
  components: {
    Movies,
  }
};
</script>

<style>
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}

</style>
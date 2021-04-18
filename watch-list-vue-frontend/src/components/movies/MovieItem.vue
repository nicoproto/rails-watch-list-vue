<template>
  <li>
    <h3>{{ title }}</h3>
    <img :src="poster_url" >
    <div class="actions">
      <router-link :to="movieDetailsLink">See details</router-link>
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "title", "poster_url"],
  computed: {
    movieDetailsLink() {
      return this.$route.path + "/" + this.id;
    }
  }
}
</script>

<style scoped>
img {
  width: 250px;
}

li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
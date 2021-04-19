<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="title">Title</label>
      <input type="text" id="title" v-model.trim="title">
    </div>
    <div class="form-control">
      <label for="overview">Overview</label>
      <textarea id="overview" rows="5" v-model.trim="overview"></textarea>
    </div>
    <div class="form-control">
      <label for="rating">Rating</label>
      <input type="number" id="rating" v-model.number="rating">
    </div>
    <div class="form-control">
      <label for="poster">Poster URL</label>
      <input type="text" id="poster" v-model.trim="poster_url">
    </div>
    <base-button>Create movie</base-button>
  </form>
</template>

<script>
export default {
  emits: ["save-data"],
  data() {
    return {
      title: "",
      overview: "",
      rating: null,
      poster_url: ""
    }
  },
  methods: {
    submitForm() {
      const formData = {
        title: this.title,
        overview: this.overview,
        rating: this.rating,
        poster_url: this.poster_url
      }

      this.$emit("save-data", formData);
    }
  }
}
</script>

<style scoped>
form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{invalid: !title.isValid}">
      <label for="title">Title</label>
      <input type="text" id="title" v-model.trim="title.val" @blur="clearValidity('title')">
    </div>
    <p v-if="!title.isValid">Title must not be empty.</p>
    <div class="form-control" :class="{invalid: !overview.isValid}">
      <label for="overview">Overview</label>
      <textarea id="overview" rows="5" v-model.trim="overview.val" @blur="clearValidity('overview')"></textarea>
    </div>
    <p v-if="!overview.isValid">Overview must not be empty.</p>
    <div class="form-control" :class="{invalid: !rating.isValid}">
      <label for="rating">Rating</label>
      <input type="number" id="rating" v-model.number="rating.val" @blur="clearValidity('rating')">
    </div>
    <p v-if="!rating.isValid">Rating must be greater than 0.</p>
    <div class="form-control" :class="{invalid: !poster_url.isValid}">
      <label for="poster">Poster URL</label>
      <input type="text" id="poster" v-model.trim="poster_url.val" @blur="clearValidity('poster_url')">
    </div>
    <p v-if="!poster_url.isValid">Poster URL must not be empty.</p>

    <p v-if="!formIsValid">Please fix the above errors and submit again.</p>
    <base-button>Create movie</base-button>
  </form>
</template>

<script>
export default {
  emits: ["save-data"],
  data() {
    return {
      title: {
        val: "",
        isValid: true
      },
      overview: {
        val: "",
        isValid: true
      },
      rating: {
        val: null,
        isValid: true
      },
      poster_url: {
        val: "",
        isValid: true
      },
      formIsValid: true,
    }
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;

      if (this.title.val == "") {
        this.title.isValid = false;
        this.formIsValid = false;
      }
      if (this.overview.val == "") {
        this.overview.isValid = false;
        this.formIsValid = false;
      }
      if (!this.rating.val || this.rating.val < 0) {
        this.rating.isValid = false;
        this.formIsValid = false;
      }
      if (this.poster_url.val == "") {
        this.poster_url.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        title: this.title.val,
        overview: this.overview.val,
        rating: this.rating.val,
        poster_url: this.poster_url.val,
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
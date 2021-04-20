<template>
  <div>
    <base-dialog :show="!!error" title="An error ocurred!" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>FILTERS</section>
    <section>
      <base-card>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasLists">
          <list-item
            v-for="list in lists"
            :key="list.id"
            :id="list.id"
            :name="list.name"
          ></list-item>
        </ul>
        <h3 v-else>No list found.</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ListItem from "../../components/lists/ListItem.vue";

export default {
  components: {
    ListItem,
  },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  computed: {
    ...mapGetters({
      lists: "lists/lists",
      hasLists: "lists/hasLists",
    }),
  },
  methods: {
    ...mapActions({
      loadLists: "lists/loadLists",
    }),
    async setLists() {
      this.isLoading = true;
      try {
        await this.loadLists();
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
  created() {
    this.setLists();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>

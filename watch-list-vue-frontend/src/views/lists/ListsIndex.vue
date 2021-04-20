<template>
  <div>
    <section>FILTERS</section>
    <section>
      <base-card>
        <ul v-if="hasLists">
          <li v-for="list in lists" :key="list.id">
            {{ list.name }}
          </li>
        </ul>
        <h3 v-else>No list found.</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
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
      try {
        await this.loadLists();
      } catch (error) {
        // TODO: Handle error
      }
    },
  },
  created() {
    this.setLists();
  },
};
</script>

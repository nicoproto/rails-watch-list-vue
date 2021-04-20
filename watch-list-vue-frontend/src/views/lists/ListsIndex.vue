<template>
  <div>
    <section>FILTERS</section>
    <section>
      <base-card>
        <ul v-if="hasLists">
          <list-item
            v-for="list in lists"
            :key="list.id"
            :id="list.id"
            :name="list.name"
          ></list-item>
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
import ListItem from "../../components/lists/ListItem.vue";

export default {
  components: {
    ListItem,
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

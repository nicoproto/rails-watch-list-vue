<template>
  <div>
    <section>
      <base-card>
        <h2>Name: {{ list.name }}</h2>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h3>Actions:</h3>
          <base-button link :to="editLink">Edit</base-button>
          <base-button>Destroy</base-button>
        </header>
      </base-card>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  props: ["id"],
  data() {
    return {
      list: {},
    }
  },
  computed: {
    ...mapGetters({
      selectedList: "lists/selectedList",
    }),
    editLink() {
      return this.$route.path + "/edit";
    },
  },
  methods: {
    ...mapActions({
      loadList: "lists/loadList",
    }),
    async setList() {
      try {
        await this.loadList({ id: this.id });
        this.list = this.selectedList;
      } catch (error) {
        console.log(error); // TODO: Handle this error
      }
    }
  },
  created() {
    this.setList();
  }
}
</script>

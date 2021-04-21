<template>
  <div>
    <base-dialog :show="!!error" title="An error ocurred!" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
    <div v-else>
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
            <base-button @click="removeList">Destroy</base-button>
          </header>
        </base-card>
      </section>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: ["id"],
  data() {
    return {
      isLoading: false,
      error: null,
      list: {},
    };
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
      destroyList: "lists/destroyList",
    }),
    async setList() {
      this.isLoading = true;
      try {
        await this.loadList({ id: this.id });
        this.list = this.selectedList;
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
      this.isLoading = false;
    },
    async removeList() {
      this.isLoading = true;
      if (confirm("Do you really want to delete?")) {
        try {
          await this.destroyList({ id: this.id });
          this.$router.replace("/lists");
        } catch (error) {
          this.error = error.message || "Something went wrong!";
        }
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
  created() {
    this.setList();
  },
};
</script>

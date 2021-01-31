<template>
  <div>
    <p>desde vue con id</p>
    <h1>
      <div v-if="loading">loading...</div>
      <div v-else-if="data">
        <p><strong>Nombre:</strong> {{ data.name }}</p>
        <p>
          <strong>Autor:</strong>
          {{ data.author }}
        </p>
        <p><strong>Year:</strong> {{ data.year }}</p>
      </div>
      <div v-else>error obteniendo la data</div>
    </h1>
  </div>
</template>

<script>
/* Usar apollo query con variable

    y mdbbootstrap
*/
import getDetails from "../gql/getDetailsBook.gql";
export default {
  name: "SingleBook",
  data() {
    return {
      data: {
        name: "",
        author: "",
        year: "",
      },
      loading: true,
    };
  },
  created() {
    this.getDetails();
  },
  methods: {
    getDetails() {
      this.$apollo
        .mutate({
          mutation: getDetails,
          variables: {
            id: this.$route.params.id,
          },
        })
        .then(({ data }) => {
          this.data = data.getBookId;
          this.loading = false;
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style>
</style>
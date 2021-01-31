<template>
  <div v-if="data">
    <p><strong>Nombre</strong>:{{ data.name }}</p>
    <p><strong>Año</strong>:{{ data.year }}</p>
    <p><strong>Autor</strong>:{{ data.author }}</p>
    <button @click="handleDelete(data.id)">Eliminar</button>
    <hr />
  </div>
  <div v-else></div>
</template>

<script>
import deleteBook from "../gql/deleteBook.gql";
export default {
  name: "Book",
  props: {
    data: {
      type: Object,
    },
  },
  methods: {
    handleDelete(id) {
      this.$apollo
        .mutate({
          mutation: deleteBook,
          variables: {
            id,
          },
        })
        .then(() => window.location.reload())
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
</style>
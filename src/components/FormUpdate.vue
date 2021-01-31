<template>
  <ApolloMutation
    :mutation="require('../gql/createBook.gql')"
    :variables="{ input }"
    :update="updateForm"
    @done="onDone"
  >
    <template v-slot="{ mutate, loading, error }">
      <form @submit.prevent="mutate()">
        <input
          type="text"
          name=""
          v-model="input.name"
          placeholder="Agrega el nombre del libro"
        />
        <input
          type="number"
          name=""
          v-model="input.year"
          placeholder="Agregar el año del libto"
        />
        <input
          type="text"
          name=""
          v-model="input.author"
          placeholder="Agregar el autor del libro"
        />
        <button :disabled="loading" role="button" type="submit">Enviar</button>
      </form>
      <p v-if="error">Error: {{ error }}</p>
    </template>
  </ApolloMutation>
</template>

<script>
import getBooks from "../gql/getBooks.gql";

export default {
  name: "FormUpdate",
  data() {
    return {
      input: {
        name: "",
        year: "",
        author: "",
      },
    };
  },
  methods: {
    updateForm(store, { data: { createBook } }) {
      const data = store.readQuery({ query: getBooks });
      data.getBooks.push(createBook);
      store.writeQuery({ query: getBooks, data });
    },
    onDone() {
      (this.input.name = ""),
        (this.input.year = ""),
        (this.input.author = ""),
        this.$router.push("/");
    },
  },
  /* 
  onDONE recibe una argumento que es el resultado de la mutaciion
*/
  // (this.input.name = ""),
  //   (this.input.year = ""),
  //   (this.input.author = ""),
  //   this.$router.push("/");
};
</script>

<style>
</style>
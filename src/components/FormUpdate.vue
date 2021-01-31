<template>
  <ApolloMutation
    :mutation="require('../gql/createBook.gql')"
    :variables="{ input }"
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
    onDone() {
      (this.input.name = ""),
        (this.input.year = ""),
        (this.input.author = ""),
        (window.location.href = "/");
    },
  },
};
</script>

<style>
</style>
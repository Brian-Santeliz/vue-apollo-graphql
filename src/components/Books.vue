<template>
  <div>
    <h1>Hola mundo desde Vue-Apollo</h1>
    <ApolloQuery :query="require('../gql/getBooks.gql')">
      <template v-slot="{ result: { loading, error, data } }">
        <div v-if="loading">loading...</div>
        <div v-else-if="error">ocurrio un error obteniendo la data</div>
        <div v-else-if="data">
          <section v-for="d in data.getBooks" :key="d.id">
            <Book :data="d" />
          </section>
          <Book />
        </div>
        <div v-else>ocurrio un error obteniendo la data</div>
      </template>
    </ApolloQuery>
    <FormBook />
  </div>
</template>

<script>
import Book from "./Book.vue";
import FormBook from "./FormBook.vue";
export default {
  name: "Books",
  components: {
    Book,
    FormBook,
  },
};
</script>

<style>
</style>
<template>
  <div>
    <h1 class="text-uppercase">Hola mundo desde Vue-Apollo</h1>
    <ApolloQuery :query="require('../gql/getBooks.gql')">
      <template v-slot="{ result: { loading, error, data } }">
        <div v-if="loading">loading...</div>
        <div v-else-if="error">ocurrio un error obteniendo la data</div>
        <div v-else-if="data">
          <section v-for="d in data.getBooks" :key="d.id">
            <router-link :to="{ name: 'detail', params: { id: d.id } }">
              <Book :data="d" />
              <!-- <button @click="deleteBook(d.id)" :disabled="loading">
                Eliminar
              </button> -->
            </router-link>
          </section>
          <Book />
        </div>
        <div v-else>Cargando...</div>
      </template>
    </ApolloQuery>
    <FormBook />
    <ComponentChild type="text" name="" id="" @crerevento="event" />
  </div>
</template>

<script>
import Book from "./Book.vue";
import FormBook from "./FormBook.vue";
import deleteBook from "../gql/deleteBook.gql";
import getBooks from "../gql/getBooks.gql";
import ComponentChild from "./ComponentChild";
export default {
  data() {
    return {
      loading: false,
    };
  },
  name: "Books",
  components: {
    Book,
    FormBook,
    ComponentChild,
  },
  methods: {
    deleteBook(id) {
      this.loading = true;
      this.$apollo
        .mutate({
          mutation: deleteBook,
          variables: { id },
          update(store, { data: { deleteBook } }) {
            const data = store.readQuery({
              query: getBooks,
            });
            const datAfterDelete = {
              getBooks: data.getBooks.filter(
                (book) => book.id !== deleteBook.id
              ),
            };
            store.writeQuery({
              query: getBooks,
              data: datAfterDelete,
            });
          },
        })
        .then(() => {
          this.loading = false;
        })
        .catch((error) => console.log(error));
    },
    event(value) {
      console.log(value);
    },
  },
};
</script>

<style>
</style>
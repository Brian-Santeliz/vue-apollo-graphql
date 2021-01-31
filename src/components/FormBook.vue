<template>
  <mdbContainer class="my-4">
    <mdbRow>
      <mdbCol md="12">
        <ApolloMutation
          :mutation="require('../gql/createBook.gql')"
          :variables="{ input }"
          :update="updateCache"
          @done="onDone"
        >
          <template v-slot="{ mutate, loading, error }">
            <form @submit.prevent="mutate()">
              <input
                type="text"
                name="name"
                placeholder="write the name"
                v-model="input.name"
              />
              <input
                type="number"
                name="year"
                placeholder="write the year"
                v-model="input.year"
              />
              <input
                type="text"
                name="author"
                placeholder="write de author"
                v-model="input.author"
              />
              <button type="submit" :disabled="loading">Enviar</button>
              <p v-if="error">{{ error }}</p>
            </form>
          </template>
        </ApolloMutation>
      </mdbCol>
    </mdbRow>
  </mdbContainer>
</template>

<script>
/* Hacer que el component obtenga la data usando el metodo update. */
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
// import createBook from "../gql/createBook.gql";
import getBooks from "../gql/getBooks.gql";

export default {
  name: "FormBook",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
  },
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
    updateCache(store, { data: { createBook } }) {
      const query = {
        query: getBooks,
      };
      const data = store.readQuery(query);
      data.getBooks.push(createBook);
      store.writeQuery({ ...query, data });
    },
    onDone() {
      (this.input.name = ""), (this.input.year = ""), (this.input.author = "");
    },
    /* Agregando un libro usando this.$apollo.mutate */
    // addBook() {
    //   this.$apollo
    //     .mutate({
    //       mutation: createBook,
    //       variables: {
    //         input: this.input,
    //       },
    //       update: (store, { data: { createBook } }) => {
    //         const data = store.readQuery({
    //           query: getBooks,
    //         });
    //         data.getBooks.push(createBook);
    //         store.writeQuery({
    //           query: getBooks,
    //           data,
    //         });
    //       },
    //     })
    //     .then(() => {
    //       (this.input.name = ""),
    //         (this.input.year = ""),
    //         (this.input.author = "");
    //     })
    //     .catch((e) => console.log(e));
    // },
  },
};
</script>

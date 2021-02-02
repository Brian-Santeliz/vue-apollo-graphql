<template>
  <ApolloMutation
    :mutation="require('../gql/createBook.gql')"
    :variables="{ input }"
    :update="updateForm"
    @done="onDone"
  >
    <template v-slot="{ mutate, loading, error }">
      <mdbContainer>
        <mdbRow>
          <mdbCol md="6" lg="12">
            <form @submit.prevent="mutate()">
              <mdbInput
                type="text"
                name=""
                v-model="input.name"
                placeholder="Agrega el nombre del libro"
              />
              <mdbInput
                type="number"
                name=""
                v-model="input.year"
                placeholder="Agregar el año del libto"
              />
              <mdbInput
                type="text"
                name=""
                v-model="input.author"
                placeholder="Agregar el autor del libro"
              />
              <mdbBtn :disabled="loading" role="button" type="submit">
                Enviar
              </mdbBtn>
            </form>
            <p v-if="error">Error: {{ error }}</p>
          </mdbCol>
        </mdbRow>
      </mdbContainer>
    </template>
  </ApolloMutation>
</template>

<script>
import getBooks from "../gql/getBooks.gql";
import { mdbContainer, mdbRow, mdbCol, mdbInput, mdbBtn } from "mdbvue";
export default {
  name: "FormUpdate",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbInput,
    mdbBtn,
  },
  data() {
    return {
      input: {
        name: "",
        year: "",
        author: "",
      },
      modal: false,
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
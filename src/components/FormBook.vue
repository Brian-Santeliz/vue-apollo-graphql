<template>
  <mdbContainer class="my-4">
    <mdbRow>
      <mdbCol md="12">
        <form @submit.prevent="addBook()">
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
          <button type="submit">Enviar</button>
        </form>
      </mdbCol>
    </mdbRow>
  </mdbContainer>
</template>

<script>
/* Hacer que el component obtenga la data usando el metodo update. */
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
import createBook from "../gql/createBook.gql";
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
    addBook() {
      this.$apollo
        .mutate({
          mutation: createBook,
          variables: {
            input: this.input,
          },
        })
        .then((resul) => {
          console.log(resul);
          (this.input.name = ""),
            (this.input.year = ""),
            (this.input.author = "");
          window.location.reload();
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style>
</style>
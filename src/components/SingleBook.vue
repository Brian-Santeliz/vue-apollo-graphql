<template>
  <div>
    <p>desde vue con id</p>
    <ApolloQuery
      :query="require('../gql/getDetailsBook.gql')"
      :variables="{ id }"
    >
      <template v-slot="{ result: { loading, error, data } }">
        <div v-if="loading">Cargando...</div>
        <div v-else-if="error">Error obteniendo la data</div>
        <div v-else-if="data">
          <h1>
            <p><strong> Nombre: </strong>{{ data.getBookId.name }}</p>
            <p><strong> Year: </strong>{{ data.getBookId.year }}</p>
            <p><strong> Autor: </strong>{{ data.getBookId.author }}</p>
            <button @click="handleDelete()">Eliminar</button>
          </h1>
        </div>
        <div v-else>Cargando...</div>
      </template>
    </ApolloQuery>
    <h1>
      <!-- 
          Utilizando el metodo this.$apollo.mutate
          <div v-if="loading">loading...</div>
      <div v-else-if="data">
        <p><strong>Nombre:</strong> {{ data.name }}</p>
        <p>
          <strong>Autor:</strong>
          {{ data.author }}
        </p>
        <p><strong>Year:</strong> {{ data.year }}</p>
      </div>
      <div v-else>error obteniendo la data</div> -->
    </h1>
  </div>
</template>

<script>
import deleteBook from "../gql/deleteBook.gql";
export default {
  name: "SingleBook",
  data() {
    return {
      id: null,
    };
  },
  created() {
    this.getId();
  },

  methods: {
    getId() {
      this.id = this.$route.params.id;
    },
    handleDelete() {
      this.$apollo
        .mutate({
          mutation: deleteBook,
          variables: {
            id: this.$route.params.id,
          },
        })
        .then(() => {
          window.location.href = "/";
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  //   data() {
  //     return {
  //       //   data: {
  //       //     name: "",
  //       //     author: "",
  //       //     year: "",
  //       //   },
  //       //   loading: true,
  //     };

  //   },
  //   created() {
  //     this.getDetails();
  //   },
  //   methods: {
  //     getDetails() {
  //       //   this.$apollo
  //       //     .mutate({
  //       //       mutation: getDetails,
  //       //       variables: {
  //       //         id: this.$route.params.id,
  //       //       },
  //       //     })
  //       //     .then(({ data }) => {
  //       //       this.data = data.getBookId;
  //       //       this.loading = false;
  //       //     })
  //       //     .catch((e) => console.log(e));
  //     },
  //   },
};
</script>

<style>
</style>
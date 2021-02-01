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
            <ApolloMutation
              :mutation="require('../gql/deleteBook.gql')"
              :variables="{ id }"
              :update="updateCache"
              @done="eliminado"
            >
              <template v-slot="{ mutate, error, loading }">
                <button @click="mutate()" :disabled="loading">Eliminar</button>
                <p v-if="error">{{ error }}</p>
              </template>
            </ApolloMutation>
            <button type="submit" @click="selecionar(data.getBookId)">
              Seleccionar
            </button>
          </h1>
        </div>
        <div v-else>Cargando...</div>
      </template>
    </ApolloQuery>
    <div v-if="editar">
      <ApolloMutation
        :mutation="require('../gql/updateBook.gql')"
        :variables="{ input }"
        @done="onDone"
      >
        <template v-slot="{ mutate, error, loading }">
          <form @submit.prevent="mutate()">
            <input
              type="text"
              placeholder="nombre"
              v-model="input.name"
            /><input
              type="number"
              placeholder="año"
              v-model="input.year"
            /><input type="text" placeholder="autor" v-model="input.author" />
            <button type="submit" :disabled="loading">Actualizar</button>
            <p v-if="error">{{ error }}</p>
          </form>
        </template>
      </ApolloMutation>
    </div>

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
import getBooks from "../gql/getBooks.gql";
export default {
  name: "SingleBook",
  data() {
    return {
      id: null,
      editar: false,
      input: {
        name: "",
        year: "",
        author: "",
      },
    };
  },
  created() {
    this.getId();
  },

  methods: {
    getId() {
      this.id = this.$route.params.id;
    },
    selecionar(data) {
      const { name, year, author } = data;
      this.input.name = name;
      this.input.year = year;
      this.input.author = author;
      this.input.id = this.id;
      this.editar = true;
    },
    // handleDelete() {
    //   this.$apollo
    //     .mutate({
    //       mutation: deleteBook,
    //       variables: {
    //         id: this.$route.params.id,
    //       },
    //     })
    //     .then(() => {
    //       window.location.href = "/";
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // },
    onDone() {
      this.editar = false;
      this.$router.push("/");
    },
    updateCache(store, { data: { deleteBook } }) {
      const data = store.readQuery({
        query: getBooks,
      });
      const dataAfterDelete = {
        getBooks: data.getBooks.filter((book) => book.id !== deleteBook.id),
      };
      store.writeQuery({
        query: getBooks,
        data: dataAfterDelete,
      });
    },
    eliminado() {
      this.$router.push("/");
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
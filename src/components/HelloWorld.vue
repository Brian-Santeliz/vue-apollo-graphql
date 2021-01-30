<template>
  <div class="container">
    <ApolloQuery :query="require('../gql/obtenerAlbum.gql')">
      <template v-slot="{ result: { loading, error, data } }">
        <div v-if="loading">Cargando...</div>

        <div v-else-if="error">Error ocurrido</div>

        <div v-else-if="data">
          <p>
            {{ data }}
          </p>
        </div>

        <div v-else class="no-result apollo">No Hay resultados :(</div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<template>
  <div v-if="data">
    <p><strong>Nombre</strong>:{{ data.name }}</p>
    <p><strong>Año</strong>:{{ data.year }}</p>
    <p><strong>Autor</strong>:{{ data.author }}</p>
    <hr />
  </div>
  <div v-else>Sin datos...</div>
</template>

<script>
export default {
  name: "Book",
  props: {
    data: {
      type: Object,
    },
  },
};
</script>

<style>
</style>
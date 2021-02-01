<template>
  <div v-if="data">
    <p><strong class="text-uppercase">Nombre</strong>:{{ data.name }}</p>
    <p><strong>Año</strong>:{{ data.year }}</p>
    <p><strong>Autor</strong>:{{ data.author }}</p>
    <hr />
  </div>
  <div v-else></div>
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
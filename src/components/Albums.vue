<template>
  <div>
    <h1>{{ title }}</h1>
    <h3>{{ id }}</h3>
  </div>
</template>

<script>
export default {
  name: "Albums",
  props: {
    title: {
      type: String,
    },
    id: {
      type: String,
    },
  },
};
</script>

<style>
</style>
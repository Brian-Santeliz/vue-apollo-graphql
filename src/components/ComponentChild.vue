<template>
  <button type="text" @click="click">Emit Event</button>
</template>

<script>
export default {
  name: "ComponentChild",
  methods: {
    click(event) {
      this.$emit("crerevento", event);
    },
  },
};
</script>

<style>
</style>
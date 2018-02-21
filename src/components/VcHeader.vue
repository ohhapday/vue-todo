<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'vc-header',
    data() {
      return {
        msg: 'TODO it!',
      }
    },
  }
</script>

<style scoped>
  h1 {
    color: #2f3b52;
    font-weight: 600;
    margin: 2.5rem 0 1.5rem;
    font-size: 2em;
  }
</style>

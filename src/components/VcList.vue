<template>
  <div class="row">
    <div class="col-sm-12" v-for="(value, index) in propsdata">
      {{value}} [{{index}}]
      <button @click="deleteData(index)">삭제</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "vc-list",
    props: ['propsdata'],
    methods: {
      deleteData(index) {
        this.$emit('deleteData', index);
      }
    }
  }
</script>

<style scoped>

</style>

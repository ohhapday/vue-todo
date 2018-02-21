<template>
  <div class="footer">
    <div class="row">
      <div class="col-sm-12">
        <button type="button" class="btn btn-warning btn-flat" @click="clearTodo">전체 삭제</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "vc-footer",
    methods: {
      clearTodo() {
        alert('clear all');
      }
    }

  }
</script>

<style scoped>
  .footer {
    margin-top: 2rem;
  }
</style>

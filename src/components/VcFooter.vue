<template>
  <div class="footer">
    <div class="row">
      <div class="col-sm-12">
        <button type="button" class="btn btn-warning btn-flat" @click="deleteAll">
          <i class="fa fa-trash-o"></i>
          전체 삭제
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "vc-footer",
    methods: {
      deleteAll() {
        this.$emit('deleteAll');
      }
    }

  }
</script>

<style scoped>
  .footer {
    margin-top: 2rem;
  }
</style>

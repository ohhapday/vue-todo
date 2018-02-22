<template>
  <div class="row">
    <div class="col-sm-12">
      <ul>
        <transition-group name="list">
          <li v-for="(value, index) in propsdata" :key="index">
            [{{index}}] {{value}}
            <button class="btn btn-danger pull-right" @click="deleteData(index)">
              <i class="fa fa-trash"></i>
              삭제
            </button>
          </li>
        </transition-group>
      </ul>
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
  ul {
    padding-left: 0;
  }
  li {
    list-style-type: none;
    background: #ffffff;
    padding: 5px;
    height: 45px;
    line-height: 35px;
    border-radius: 5px;
    margin-bottom: 0.5rem;
  }

  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
</style>

<template>
  <div id="app" class="container">
    <vc-header/>
    <vc-input @postData="postData"/>
    <vc-list v-bind:propsdata="messages" @deleteData="deleteData"/>
    <vc-footer @deleteAll="deleteAll"/>
  </div>
</template>

<script>
  import VcHeader from './components/VcHeader.vue';
  import VcInput from './components/VcInput.vue';
  import VcList from './components/VcList.vue';
  import VcFooter from './components/VcFooter';

  export default {
    name: 'app',
    components: {
      VcList,
      'vc-header': VcHeader,
      'vc-input': VcInput,
      'vc-list': VcList,
      'vc-footer': VcFooter,
    },
    data() {
      return {
        messages: []
      }
    },
    methods: {
      postData(message) {
        this.messages.push(message);
        localStorage.setItem('messages', JSON.stringify(this.messages));
      },
      deleteData(index) {
        this.messages.splice(index, 1);
        localStorage.setItem('messages', JSON.stringify(this.messages));
      },
      deleteAll() {
        this.messages = [];
        localStorage.setItem('messages', JSON.stringify(this.messages));
      }
    },
    created() {
      this.messages = JSON.parse(localStorage.getItem('messages')) || [];
    },
  }
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F8;
  }
</style>

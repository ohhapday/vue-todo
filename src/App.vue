<template>
  <div id="app" class="container">
    <vc-header/>
    <vc-input v-on:postData="postData"/>
    <vc-footer/>
  </div>
</template>

<script>
  import VcHeader from './components/VcHeader.vue';
  import VcInput from './components/VcInput.vue';
  import VcFooter from './components/VcFooter';

  export default {
    name: 'app',
    components: {
      'vc-header': VcHeader,
      'vc-input': VcInput,
      'vc-footer': VcFooter,
    },
    methods: {
      postData(message) {
        console.log(message);
      }
    }
  }
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F8;
  }
</style>

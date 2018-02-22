<template>
  <div id="app" class="container">
    <vc-header/>
    <vc-input @postData="postData"/>
    <vc-list v-bind:propsdata="messages" @deleteData="deleteData"/>
    <vc-footer @deleteAll="deleteAll"/>
  </div>
</template>

<script>
  // import firebase from './lib/firebase-init.js';     ?? 어떻게 ??

  import firebase from 'firebase';

  let config = {
    apiKey: "AIzaSyBlipJpRzbe5tXaINzEyUbQdSiozybReHo",
    authDomain: "vue-todo-cd91e.firebaseapp.com",
    databaseURL: "https://vue-todo-cd91e.firebaseio.com",
    projectId: "vue-todo-cd91e",
    storageBucket: "vue-todo-cd91e.appspot.com",
    messagingSenderId: "50362108531"
  };

  let app = firebase.initializeApp(config),
    db = app.database(),
    dbRef = db.ref('myData'),
    dbKey = null;

  import VcHeader from './components/VcHeader.vue';
  import VcInput from './components/VcInput.vue';
  import VcList from './components/VcList.vue';
  import VcFooter from './components/VcFooter';

  export default {
    name: 'app',
    components: {
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
    created() {
      // this.messages = JSON.parse(localStorage.getItem('messages')) || [];
      let self = this;
      dbRef.limitToLast(1).on('child_added', function (data) {
        self.messages = data.val();
        dbKey = data.key;
      });
    },
    methods: {
      postData(message) {
        this.messages.push(message);
        this.copyStorage();
      },
      deleteData(index) {
        this.messages.splice(index, 1);
        this.copyStorage();
      },
      deleteAll() {
        this.messages = [];
        this.copyStorage();
      },
      copyStorage() {
        // localStorage.setItem('messages', JSON.stringify(this.messages));
        // async 처리 어떻게???
        let myData = db.ref('myData/' + dbKey);
        console.log(this.messages);
        myData.update(this.messages);
      }
    },
  }
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F8;
  }
</style>

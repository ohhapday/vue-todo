/**
 * Created by WebStorm.
 * User: 서정석
 * Date: 2018/02/22
 * Time: 오후 3:37
 */
import firebase from 'firebase';

let config = {
  apiKey: "AIzaSyBlipJpRzbe5tXaINzEyUbQdSiozybReHo",
  authDomain: "vue-todo-cd91e.firebaseapp.com",
  databaseURL: "https://vue-todo-cd91e.firebaseio.com",
  projectId: "vue-todo-cd91e",
  storageBucket: "vue-todo-cd91e.appspot.com",
  messagingSenderId: "50362108531"
};

firebase.initializeApp(config);

console.log(firebase);

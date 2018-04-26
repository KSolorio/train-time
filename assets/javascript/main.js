 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyCkYav9VgePY3zHQKnkrfcMD3JBUNNai_M",
  authDomain: "train-time-870a0.firebaseapp.com",
  databaseURL: "https://train-time-870a0.firebaseio.com",
  projectId: "train-time-870a0",
  storageBucket: "",
  messagingSenderId: "639070296096"
};
firebase.initializeApp(config);

var database = firebase.database();
console.log(database);
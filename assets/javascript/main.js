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

//shortcut for refering back to database 
var database = firebase.database();


//target submit button
$("#add-train-btn").on("click", function(event) {
  event.preventDefault();
  
  //create variables for each train 
  var trainName = $("#train-name-input").val().trim();
  var trainDestination = $("#destination-input").val().trim();
  var trainFrequency = $("#frequency-input").val().trim();
    //parsing glued hour and minutes---- moment("123", "hmm").format("HH:mm")
  var firstTrain = ""; //moment.js

  //creates new train
  var newTrain = {
    name: trainName, 
    destination: trainDestination,
    frequency: trainFrequency, 
    first: firstTrain, 
  };
  
  //pushes information of new train to database
  database.ref().push(newTrain);
    console.log(firstTrain)
  //clears form after adding train 
  $("#train-name-input").val('');
  $("#destination-input").val('');
  $("#frequency-input").val('');
  $("#first-train-input").val('');

});



  //on click copy data into webpage
  // $("#train-table > tbody").append("<tr><td>" + trainName + "</td<td>" + trainDestination +"</td><td>" + "</td><td>" + trainFrequency +"</td></tr>");

  // caluclate next arrival and minutes away 

//closing tag for firebase 






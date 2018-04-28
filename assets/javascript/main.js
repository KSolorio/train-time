$(document).ready(function() {  
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
  var firstTrain = $("#first-train-input").val().trim();
  if (trainName == '' || trainDestination =='' || trainFrequency == '' || firstTrain == '') {
    alert('please fill out all inputs');
  }
  
  //creates new train
  var newTrain = {
    name: trainName, 
    destination: trainDestination,
    frequency: trainFrequency, 
    first: firstTrain, 
  };
  
  //pushes information of new train to database
  database.ref().push(newTrain);

  //clears form after adding train 
  $("#train-name-input").val('');
  $("#destination-input").val('');
  $("#frequency-input").val('');
  $("#first-train-input").val('');
  return false;
});

 //from firebase to webpage
 database.ref().on("child_added", function(childSnapshot, prevChildKey){
  console.log(childSnapshot.val());

  //give each train a shortcut for their info in firebase
  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var trainFrequency = childSnapshot.val().frequency;
  var firstTrain = childSnapshot.val().first;

  //moment.js time!

  //current time: 
  var now = moment().format("HH:mm");
    console.log("time now " + now);
  //prettify train arrival time
  var trainStart = moment.unix(firstTrain).format("hh:mm");
  //diff between the times
  var diffTime = moment().diff(moment(firstTrain, "hh:mm A"), "m");
    console.log("difference in time" + diffTime);
  //mins away
  var minsAway = diffTime % trainFrequency;
    console.log("remainder " + minsAway);
  //time left 
  var timeLeft = trainFrequency - minsAway;
    console.log("mins till train: " + minsAway);
  // next arrival: time now + minutes away
  var nextArrival = moment().add(timeLeft, "m");

  var newTrain = moment(nextArrival).format("hh:mm A");
  var timeAway = timeLeft;
    

  //  display all information in html from firebase
  $("#train-table tbody").append(
    "<tr><td>" +
    "</td><td>" + trainName + 
    "</td><td>" + trainDestination + 
    "</td><td>" + trainFrequency + 
    "</td><td>" + newTrain + 
    "</td><td>" + timeLeft + 
    "</td><tr>")

  });

  $("thead").on("click", "button", function(e) {
    e.preventDefault();
    $(this).parent().remove();
});
  
});






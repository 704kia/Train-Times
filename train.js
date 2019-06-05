var firebaseConfig = {
    apiKey: "AIzaSyAd3Dr8nMjMVhmq7rjAzU6kkyLZGIPyrLY",
    authDomain: "train-14cef.firebaseapp.com",
    databaseURL: "https://train-14cef.firebaseio.com",
    projectId: "train-14cef",
    storageBucket: "",
    messagingSenderId: "73651022427",
    appId: "1:73651022427:web:4fa96085535ad9ac"
  };
//intitalize firebase
  firebase.initializeApp(config);

//reference to database
var database = firebase.database();

//variables for trains
//var trainName = "";
//var destination = "";
//var time = 0;
//var frequency = 0;

//button for train
$("#add-train").on("click", function(event){
  event.preventDefault();

//grab user input
var trainName = $("#train-name-input").val().trim();
var destination = $("#destination-input").val().trim();
var time = $("#train-time-input").val().trim();
var frequency = $("#frequency-input").val().trim();

//local object
var newTrain = {
  name: trainName,
  destination:  destination,
  time: time,
  frequency: frequency
};
//data uploads to database
database.ref().push(newTrain);

console.log(newTrain.name)
console.log(newTrain.destination)
console.log(newTrain.time)
console.log(newTrain.frequency)

//clear inputs

$("#train-name-input").val("");
$("#destination-input").val("");
$("#train-time-input").val("");
$("#frequency-input").val("");

});

//firebase event to add new train and row
database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());

//store variables of snapshots

var trainName = childSnapshot.val().name;
var destination = childSnapshot.val().destination;
var time = childSnapshot.val().time;
var frequency = childSnapshot.val().frequency;


//make new row
var newRow = $("<tr>").append(
$("<td>").text(trainName),
$("<td>").text(destination),
$("<td>").text(time),
$("<td>").text(frequency)
)

//append row to table
$("#schedule table > tbody").append(newRow);
});
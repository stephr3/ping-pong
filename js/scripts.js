//Business Logic

//Set up global variables
var numberList = [];

//Validate user number
var validator = function(userInput){
  if (userInput && !isNaN(userInput)) {
    parseInt(userInput);
    //Run functions
    if (userInput > 0) {
      createList(userInput);
      pingPongList(numberList);
      appendList(numberList, "#numberList");
      console.log(numberList);
    } else {
      alert("Please enter a number greater than 0.");
    }
  } else {
    alert("Please enter a valid number");
  }
};

//Count up to user number
var createList = function(upperNumber){
  for (var i=1; i<=upperNumber; i++) {
    numberList.push(i);
  }
};

//Add ping, pong, and pingpong strings
var pingPongList = function(numberList) {
  for (var i=0; i<numberList.length; i++) {
    if ((numberList[i] % 15) === 0) {
      numberList[i] = "pingpong";
    } else if ((numberList[i] % 5) === 0) {
      numberList[i] = "pong";
    } else if ((numberList[i] % 3) === 0){
      numberList[i] = "ping";
    }
  }
};

//Append list to HTML
var appendList = function(list, div){
  for (var i=0; i<list.length; i++) {
    $(div).append("<li>" + list[i] + "</li>");
  }
};

// User Interface Logic

$(document).ready(function(){
  //Submit button functionality
  $("form").submit(function(event){
    event.preventDefault();
    //Reset number list
    numberList = [];
    console.log(numberList);
    //Set variables
    var userNumber = $("#userNumber").val();
    //Validate user input and run functions
    validator(userNumber);
    //Display for user
    $("#numberList").show();
  });
});

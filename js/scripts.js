//Business Logic

//Set up global variables
var numberList = [];

var createList = function(upperNumber){
  for (var i=1; i<=upperNumber; i++) {
    numberList.push(i);
  }
};

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
    //Set variables
    var userNumber = parseInt($("#userNumber").val());
    //Run functions
    createList(userNumber);
    pingPongList(numberList);
    appendList(numberList, "#numberList");
    console.log(numberList);
    //Display for user
    $("#numberList").show();
  });
});

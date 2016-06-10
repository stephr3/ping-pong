//Business Logic

//Set up global variables
var numberList = [];

var createList = function(upperNumber){
  for (var i=1; i<=upperNumber; i++) {
    numberList.push(i);
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
    var userNumber = $("#userNumber").val();
    //Run functions
    createList(userNumber);
    appendList(numberList, "#numberList");

    $("#numberList").show();

  });
});

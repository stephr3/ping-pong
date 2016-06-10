//Business Logic

//Set up global variables
var numberList = [];
var j = 0;

//Validate user number
var validator = function(userInput){
  if (userInput && !isNaN(userInput)) {
    parseInt(userInput);
    //Run functions
    if (userInput > 0) {
      colorChange(userInput);
      createList(userInput);
      pingPongList(numberList);
      //Toggle between animate display and list display
      if($("#radioAnimate").is(":checked")){
        $("#animation").show();
        animateList(numberList, "#animation h1");
      } else if ($("#radioList").is(":checked")) {
        $("#numberList").show();
        appendList(numberList, "#numberList ul");
      }
      $("form button").text("Play Again!");
    } else {
      $("#validate").addClass("has-error");
      $("#negativeNumber").show();
    }
  } else {
    $("#validate").addClass("has-error");
    $("#invalid").show();
  }
};

//Change background color
var colorChange = function(userNumber){
  if(userNumber <= 10){
    $("body").css("background-color", "red");
  } else if (userNumber <= 20){
    $("body").css("background-color", "blue");
  } else if (userNumber <= 30){
    $("body").css("background-color", "pink");
  }else {
    $("body").css("background-color", "#3B9C53");
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
var appendList = function(list, ul){
  for (var i=0; i<list.length; i++) {
      $(ul).append("<li>" + list[i] + "</li>");
  }
};

//Animate list
var animateList = function(list, h1){
    j = 0;
    (function cycle() {
        if (j < list.length) {
            $(h1).text(list[j])
                          .fadeIn(300)
                          .delay(800)
                          .fadeOut(300, cycle);
            j++;
        }
    })();
};

// User Interface Logic

$(document).ready(function(){

  //Submit button functionality
  $("form").submit(function(event){
    event.preventDefault();
    //Reset
    numberList = [];
    $("#numberList ul").empty();
    $(".control-label").hide();
    $("#validate").removeClass("has-error");
    $("#animation").hide();
    $("#numberList").hide();
    //Set variables
    var userNumber = $("#userNumber").val();
    //Validate user input and run functions
    validator(userNumber);
    //Display for user
    $("#numberList").show();
  });

  //Start button functionality
  $("#landingPage button").click(function(event){
    event.preventDefault;
    $("#landingPage").hide();
    $("#gamePage").show();
  });

  //Stop animation button functionality
  $("#animateToggle").click(function(event){
    event.preventDefault;
    j = numberList.length;
  });
});

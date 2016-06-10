// User Interface Logic

$(document).ready(function(){
  //Submit button functionality
  $("form").submit(function(event){
    event.preventDefault();
    //Set variables
    var userNumber = $("#userNumber").val();
    console.log(userNumber);
  });
});

$(document).ready(function(){
  var number= 1;
  var fade = function(){
    $("#photo" + number).fadeOut("slow");
    $("#photo" + number).css("display", "none");
    number++;
    if(number == 6){
      number = 1;
    }
    $("#photo" + number).fadeIn("slow");
    $("#photo" + number).css("display", "initial");

  }
  setInterval(function(){
    fade();

}, 5000);

});

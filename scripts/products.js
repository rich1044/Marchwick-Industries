$(document).ready(function(){
  var i = 1;
  var j = 1;
  $("#right").click(function(){
    i++;
    if(i > 7){
      i=1;
    }
    $("#hinges").css("background-image", "url(images/hinges/"+ i + ".jpg)");
  });

  $("#left").click(function(){
    i--;
    if(i< 1){
      i=7;
    }
    $("#hinges").css("background-image", "url(images/hinges/"+ i + ".jpg)");

  });


  $("#right1").click(function(){
    j++;
    if(j > 3){
      j=1;
    }
    $("#emblem").css("background-image", "url(images/emblems/"+ j + ".jpg)");
  });

  $("#left1").click(function(){
    j--;
    if(j< 1){
      j=3;
    }
    $("#emblem").css("background-image", "url(images/emblems/"+ j + ".jpg)");

  });
});

$(function() {

  $("redplace").on("click", function() {
    if($(this).css('background-color')=='red') {
      $(this).css({
        backgroundColor: 'blue',
        border: '10px dashed red',
        color: 'red'
      });
      $(this).html('BLUE');
    } else if ($(this).css('background-color')=='blue') {
      $(this).css({
        backgroundColor: 'red',
        border: '10px dashed blue',
        color: 'blue'
      });
      $(this).html('RED');
    }    
  });

  function colorChange() {
    var bgColor = document.getElementById("redplace").style.backgroundColor;
    var h3Color = document.getElementById("redplace").style.color;
    var borderColor = document.getElementById("redplace").style.border;
    var text = document.getElementById("redplace").innerHTML;

    if (bgColor == "red") {
      bgColor = "blue";
      h3Color = "red";
      borderColor = "10px dashed red";
      text = "BLUE";
    } else if (bgColor == "blue") {
      bgColor = "red";
      h3Color = "blue";
      borderColor = "10px dashed blue";
      text = "RED";
    }
    document.getElementById("redplace").style.backgroundColor = bgColor;
    document.getElementById("redplace").style.color = h3Color;
    document.getElementById("redplace").style.border = borderColor;
    document.getElementById("redplace").innerHTML = text;
  }

  try {
      console.log("getting it..");
      var redplace = document.getElementById("redplace");
      console.log(redplace);
      redplace.addEventListener("click", colorChange);
      console.log("maybe!");
  } catch(err) {
      console.log(err);
  }

});

$(function() {

  $(".redplace").toggle( function() {
      $(this).css('background', 'red');
      $(this).css('border', '10px dashed blue');
      $(this).css('color', 'blue');
      $(this).html('RED');
    }, function() {
      $(this).css('background', 'blue');
      $(this).css('border', '10px dashed red');
      $(this).css('color', 'red');
      $(this).html('BLUE');
    }
  );


});

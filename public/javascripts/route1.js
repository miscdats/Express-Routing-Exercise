$(function() {

  console.log('before');

  $('#place').click( function() {
    $(this).toggleClass('blueplace');
    console.log('during');
  });

  console.log('after');

});

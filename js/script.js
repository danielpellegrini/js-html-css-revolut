$(document).ready(function() {

  $('.features > a:first-child').click(function(event) {
    $('.dropdown-container').toggle();
    $(this).hover(function(event) {
      $('.dropdown-container').toggle();
    });
  });

  $('.plans > a:first-child').click(function(event) {
    $('.dropdown-container-small').toggle();
    $(this).hover(function(event) {
      $('.dropdown-container-small').toggle();
    });
  });

});

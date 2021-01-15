$(document).ready(function() {

  $('.features > a:first-child').click(function(event) {
    $('.dropdown-container').toggle();
    $('.dropdown-container').mouseleave(function(event) {
      $('.dropdown-container').toggle();
    });
  });

  $('.plans > a:first-child').click(function(event) {
    $('.dropdown-container-small').toggle();
    $('.dropdown-container-small').mouseleave(function(event) {
      $('.dropdown-container-small').toggle();
    });
  });

  $('.about > a:first-child').click(function(event) {
    $('.dropdown-container-about').toggle();
    $('.dropdown-container-about').mouseleave(function(event) {
      $('.dropdown-container-about').toggle();
    });
  });

  $('.help > a:first-child').click(function(event) {
    $('.dropdown-container-help').toggle();
    $('.dropdown-container-help').mouseleave(function(event) {
      $('.dropdown-container-help').toggle();
    });
  });
});

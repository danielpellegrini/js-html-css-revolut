$(document).ready(function() {

	$('.dropdown').click(function() {
		$(this).find('.dropdown-menu').toggleClass('active');
	});

	$('.dropdown-menu').mouseleave(function() {
		$('.dropdown-menu').removeClass('active');
	});

});

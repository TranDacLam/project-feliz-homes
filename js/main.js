$(document).ready(function(){
	$('.header').height($(window).height());

	$(".navbar a").click(function(){
		$("body,html").animate({
			scrollTop:$("#" + $(this).data('value')).offset().top
		},1000)
	
	})

	$('.your-class').slick();

	window.onscroll = function() {myFunction()};

	// Get the header
	var header = document.getElementById("landing-nav");

	// Get the offset position of the navbar
	var sticky = header.offsetTop;

	// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function myFunction() {
		console.log(sticky, window.pageYOffset)
		if (window.pageYOffset > sticky) {
			header.classList.add("sticky-top");
		} else {
			header.classList.remove("sticky-top");
		}
	}

})
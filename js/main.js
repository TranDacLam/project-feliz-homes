$(function(){

	new WOW().init();
	let navText = [
		`<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
		</svg>`,
		`<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
		</svg>`
	];
	
	$('.utilities__list').owlCarousel({
		items:1,
		nav: true,
		dots: false,
		loop:true,
		navText: navText,
		responsive:{
			
		}
	});

	$('.ground__list').owlCarousel({
		items:1,
		loop:true,
		margin:10,
		stagePadding: 200,
		nav: true,
		navText: navText,
		responsive:{
			
		}
	});

	$('.apartment__list').owlCarousel({
		items:1,
		nav: true,
		dots: false,
		loop:true,
		navText: navText,
		responsive:{
			
		}
	});

	$('.furniture__list').owlCarousel({
		items:1,
		loop:true,
		margin:10,
		stagePadding: 200,
		nav: true,
		navText: navText,
		responsive:{
			
		}
	});

	$('.news__list').owlCarousel({
		items:3,
		loop:true,
		margin:60,
		nav: true,
		navText: [`<img src="images/arrow-1.png" />`, `<img src="images/arrow-2.png" />`],
		responsive:{
			
		}
	});
	
	// $('.header').height($(window).height());

	// $(".navbar a").click(function(){
	// 	$("body,html").animate({
	// 		scrollTop:$("#" + $(this).data('value')).offset().top
	// 	},1000)
	
	// })

	window.onscroll = function() {myFunction()};

	// Get the header
	var header = document.getElementById("landing-nav");

	// Get the offset position of the navbar
	var sticky = header.offsetTop;

	myFunction()

	// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function myFunction() {
		if (window.pageYOffset > sticky) {
			header.classList.add("sticky-top");
		} else {
			header.classList.remove("sticky-top");
		}
	}

})
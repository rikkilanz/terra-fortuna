// Menu Toggle

var isOpen = false;

const targetElement = document.querySelector('.gn-nav');
// const card = document.querySelector('.card');
bodyScrollLock.disableBodyScroll(targetElement);
bodyScrollLock.enableBodyScroll(targetElement);

//Flickity
$('.hero-slider').flickity({
	// options
	cellAlign: 'left',
	contain: true,
	prevNextButtons: false,
	pageDots: false,
	autoPlay: 2222
  });

// Hamburger
$('.mobile-menu').click(function() {
	if(!isOpen){
		$(this).toggleClass('toggle');
		$('.gn-nav').stop();
		$('.gn-nav').slideDown();
		bodyScrollLock.disableBodyScroll(targetElement);

		isOpen = true;
	} else {
		$(this).toggleClass('toggle');
		$('.gn-nav').stop();
		$('.gn-nav').slideUp();
		bodyScrollLock.enableBodyScroll(targetElement);
		isOpen = false;
	}
});

// Accordion
new Accordion('.accordion-container');

// Smooth Scrolling
// Add smooth scrolling to all links
$("a").on('click', function(event) {

	// Make sure this.hash has a value before overriding default behavior
	if (this.hash !== "") {
	// Prevent default anchor click behavior
	event.preventDefault();

	// Store hash
	var hash = this.hash;

	// Using jQuery's animate() method to add smooth page scroll
	// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	$('html, body').animate({
		scrollTop: $(hash).offset().top
	}, 800, function(){

		// Add hash (#) to URL when done scrolling (default click behavior)
		window.location.hash = hash;
	});
	} // End if
});


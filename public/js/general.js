// @codekit-prepend "jquery.min.js"
// @codekit-prepend "jquery.inview.js"

$(document).ready(function(){
	// add class when visible
	$('.effect').bind('inview', function (event, visible) {
		if (visible == true) {
			$(this).unbind('inview');
		// element is now visible in the viewport
			$(this).addClass('visible');
		}
	});
	$(window).on('load', function () {
		$('*').trigger('inview');
	});
	$('a[href^="#"]').on('click', function(event) {
		var target = $(this.getAttribute('href'));
		if( target.length ) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top - $('header').height()
			}, 600);
		}
	});
	// menu
	$( ".show-menu" ).click(function() {
		$( this ).toggleClass( "open" );
		$( 'nav' ).toggleClass( "open" );
		$( '.idiomas' ).toggleClass( "open" );
		$( 'body' ).toggleClass( "menu-open" );
	});
	$( "nav a" ).click(function() {
		$( '.show-menu' ).removeClass( "open" );
		$( 'nav' ).removeClass( "open" );
		$( '.idiomas' ).removeClass( "open" );
		$( 'body' ).removeClass( "menu-open" );
	});
	
});

//ON SCROLL
$(window).scroll(function() {
	var scrollNode = document.scrollingElement || document.documentElement;
	var scrollTop = scrollNode.scrollTop;

	if( scrollTop < 10 ){
		$('body').removeClass('mini');
	}else{
		$('body').addClass('mini');
	}

});
$("body").trigger('scroll');

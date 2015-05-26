$(document).ready(function(){
    $('.aa-flash-message').delay(5000).fadeOut(1000);
});

// Scroll to top icon

var topLink = $('#top-link');
var showTopLink = 500;

$(window).scroll( function(){
	var y = $(window).scrollTop();
	if( y > showTopLink  ) {
                topLink.removeClass('aa-hidden');
		topLink.fadeIn('slow');
	} else {
		topLink.fadeOut('slow');
                topLink.addClass('aa-hidden');
	}
});


// Home hello link
var helloLink = $('#hello-link');
var hideHelloLink = 500;
helloLink.fadeIn('slow');

$(window).scroll( function(){
        var y = $(window).scrollTop();
	if( y > hideHelloLink  ) {
		helloLink.fadeOut('slow');
	} else {
		helloLink.fadeIn('slow');
	}
});

// Mobile menu
var mobilemenu = $('#mobile-menu');
var mobilemenubutton = $('#mobile-menu-button');

mobilemenubutton.on('click', function(){
    if (!mobilemenu.hasClass('active')){
        mobilemenu.hide().removeClass('uk-hidden').slideDown(400).addClass('active');
    }else{
        mobilemenu.slideUp(200).removeClass('active'); 
    }
});
mobilemenu.find('li').on('click',function(){
   mobilemenu.addClass('uk-hidden').removeClass('active'); 
});
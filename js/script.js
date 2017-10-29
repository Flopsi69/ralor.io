$(document).ready(function(){

	navTogglePos();

	function navTogglePos() {
		if ( $(window).width() < 992 ) {
			$('body>.header').prepend($('.navbar-wrap'));
		} else {
			$('body>.header').append($('.navbar-wrap'));
		}
	}

	$(window).scroll(function() {
		if ($(window).scrollTop() > $('body>.header').outerHeight()) {
			$('.navbar-scroll').fadeIn('fast');
		} else {
			$('.navbar-scroll').fadeOut('fast');
		}
	})

	$(window).resize(function(){
		navTogglePos();
	})

	$('.parners-carousel').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1500,
		prevArrow:"<img class='a-left control-c prev slick-prev' src='img/prev.png'>",
		nextArrow:"<img class='a-right control-c next slick-next' src='img/next.png'>",
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1
			},
		}
    ]
  });


$('.services-carousel').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 1500,
	prevArrow:"<img class='a-left control-c prev slick-prev' src='img/prev.png'>",
	nextArrow:"<img class='a-right control-c next slick-next' src='img/next.png'>",
	responsive: [
	{
		breakpoint: 1200,
		settings: {
			slidesToShow: 3
		},
	},
	{
		breakpoint: 980,
		settings: {
			slidesToShow: 2
		},
	},
	{
		breakpoint: 560,
		settings: {
			slidesToShow: 1
		},
	}
	]
})

});


$(function(){
	$('.status').fadeOut('fast', function(){
		$('.preloader').fadeOut('fast');
	});
});
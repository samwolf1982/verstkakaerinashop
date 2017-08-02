$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		
	};


	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */

$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/
    
    /* open menu*/
	$('.button-nav').click(function(){
		$(this).toggleClass('open'), 
		$('.menu').slideToggle(); 
		$('body').addClass('head-up');
        $('.button-contacts').removeClass('open');
        $('.header-contacts').slideUp(0); 
        $('.button-open-search').removeClass('open');
        $('.box-search').slideUp(0); 
		$('.box-fix-help').removeClass('open');
		$('.button-fixed').removeClass('active');
		$('.head-basket__drop').slideUp(0);
		$('.head-user-info__drop').slideUp(0);
		return false;
	});
    
    /* open catalog*/
	$('.button-open-catalog').click(function(){
		$(this).toggleClass('open'), 
        $('body').toggleClass('open-catalog'), 
		$('.box-catalog').toggleClass('open'); 
        $('.button-contacts').removeClass('open');
        $('.header-contacts').slideUp(0); 
        $('.button-open-search').removeClass('open');
        $('.box-search').slideUp(0); 
        $('.button-nav').removeClass('open');
        $('.menu').slideUp(0); 
		$('.box-fix-help').removeClass('open');
		$('.button-fixed').removeClass('active');
		$('.head-basket__drop').slideUp(0);
		$('.head-user-info__drop').slideUp(0);
		$('.list-catalog__item').removeClass('active');
		return false;
	});
    
    /* open contacts*/
	$('.button-contacts').click(function(){
		$(this).toggleClass('open'), 
		$('.header-contacts').slideToggle();
        $('.button-nav').removeClass('open');
        $('.menu').slideUp(0); 
        $('.button-open-search').removeClass('open');
        $('.box-search').slideUp(0); 
		$('.box-fix-help').removeClass('open');
		$('.button-fixed').removeClass('active');
		$('.head-basket__drop').slideUp(0);
		$('.head-user-info__drop').slideUp(0);
		return false;
	});
    /* open search*/
	$('.button-open-search').click(function(){
		$(this).toggleClass('open'), 
		$('.box-search').slideToggle(); 
        $('.button-nav').removeClass('open');
        $('.menu').slideUp(0); 
        $('.button-contacts').removeClass('open');
        $('.header-contacts').slideUp(0); 
		$('.box-fix-help').removeClass('open');
		$('.button-fixed').removeClass('active');
		$('.head-basket__drop').slideUp(0);
		$('.head-user-info__drop').slideUp(0);
		return false;
	});
	/* open EbuyShop*/
	$('.js-open-user-menu').click(function(){
		$(this).toggleClass('active'), 
		$('.head-user-info__drop').fadeToggle(); 
        $('.button-nav').removeClass('open');
        $('.menu').slideUp(0); 
        $('.button-contacts').removeClass('open');
		$('.head-basket__drop').slideUp(0);
        $('.header-contacts').slideUp(0); 
		$('.box-fix-help').removeClass('open');
		$('.button-fixed').removeClass('active');
		return false;
	});
	$(document).click(function (e) {
        if ($(e.target).parents().filter('.head-user-info__drop:visible').length != 1) {
            $('.head-user-info__drop').slideUp(200);
			$('.js-open-user-menu').removeClass('active');
        }
    });
	/* open basket*/
	$('.js-open-user-basket').click(function(){
		$(this).toggleClass('active'), 
		$('.head-basket__drop').fadeToggle(); 
        $('.button-nav').removeClass('open');
        $('.menu').slideUp(0); 
		$('.head-user-info__drop').slideUp(0);
        $('.button-contacts').removeClass('open');
        $('.header-contacts').slideUp(0); 
		$('.box-fix-help').removeClass('open');
		$('.button-fixed').removeClass('active');
		return false;
	});
	$(document).click(function (e) {
        if ($(e.target).parents().filter('.head-basket__drop:visible').length != 1) {
            $('.head-basket__drop').slideUp(200);
			$('.js-open-user-basket').removeClass('active');
        }
    });
	
	
	/* open drop catalog mobile*/
	$('.list-catalog__link').click(function(){
		$(this).parent().siblings().removeClass('active');
		$(this).parent().toggleClass('active'); 
		return false;
	});
    
    /* carusel partners*/
    $('.carusel-partners').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 11,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1170,
          settings: {
            slidesToShow: 9,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });
    
    /* carusel shop*/
    $('.js-carusel-banners').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
    
    /* amin slider*/
    $('.main-slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
    
    /* carusel now look*/
    $('.carusel-now-look').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 12,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 10,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 1
          }
        },          
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 350,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });
    
    /* carusel reviews*/
    $('.carusel-reviews').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
    
    /* открытие текста*/
    $(".js-show-toggle").toggle(function() {
		$(this).parents('.js-parent-show').find('.text-show-toggle').slideToggle();
		$(this).text("Свернуть");
	 }, function() {
		$(this).parents('.js-parent-show').find('.text-show-toggle').slideToggle();
		$(this).text("Читать далее...");
	});
	
	/* open help*/
	$('.button-fixed').click(function(){
		$(this).toggleClass('active'),
		$('.box-fix-help').toggleClass('open');
		$('.header-contacts').slideUp(0);
        $('.button-nav').removeClass('open');
        $('.menu').slideUp(0); 
        $('.button-open-search').removeClass('open');
        $('.box-search').slideUp(0); 
		return false;
	});
	$(document).click(function (e) {
        if ($(e.target).parents().filter('.box-fix-help:visible').length != 1) {
            $('.box-fix-help').removeClass('open');
			$('.button-fixed').removeClass('active');
        }
    });
	
	if ($('.fancybox').length) {
        $('.fancybox').fancybox({
			padding:0,
			margin:10
		});
    };
	
	//tabs;
    $('.js-tabs-link').click(function(){
		 $(this).parents('.js-tabs-autorize').find('.js-tab-cont').addClass('hide-tab');
		 $(this).parents('.js-tabs').find('.js-tabs-item').removeClass('active'); 
		 var id = $(this).attr('href');
		 $(id).removeClass('hide-tab');
		 $(this).parent().addClass('active'); 
		 return false;
	 });
	//tab reg;
    $('.js-open-tab-reg').click(function(){
		 $('.js-tabs-autorize').find('.js-tab-cont').addClass('hide-tab');
		 $('.js-tabs-autorize').find('.js-tabs-item').removeClass('active'); 
		 $('.js-link-tab-reg').parent().addClass('active');
		 $('.js-tab-reg').removeClass('hide-tab');
	 });
	//tab login;
    $('.js-open-tab-login').click(function(){
		 $('.js-tabs-autorize').find('.js-tab-cont').addClass('hide-tab');
		 $('.js-tabs-autorize').find('.js-tabs-item').removeClass('active'); 
		 $('.js-link-tab-login').parent().addClass('active');
		 $('.js-tab-login').removeClass('hide-tab');
	 });

});


var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();	
	$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+20});
	
	
	var offset_top = $('.header-center').offset().top;
	$(window).scroll(function () {
		if ($(window).scrollTop() > offset_top) {
			$('.header-center').addClass("fixed");
		} else {
			$('.header-center').removeClass("fixed")
		}
	});

	$(window).load(function () {
		if ($(window).scrollTop() > offset_top) {
			$('.header-center').addClass("fixed");
		} else {
			$('.header-center').removeClass("fixed")
		}
	});
	
	
	var viewport_wid = viewport().width;	
	if (viewport_wid <= 550) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);







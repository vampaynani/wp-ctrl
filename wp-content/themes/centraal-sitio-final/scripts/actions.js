var conocenos_start = function(){
    $('#dots-conocenos').setAttribute('class', 'menu-numeros'+' hidden');
};
$(".dots-btn").click(function() {
    $(".dots-btn").toggleClass("btn-rotate");
    $(".btns").find("a").removeClass();
    $(".btns").removeClass("buttons-init fade").toggleClass("expand");
});
$(".btns").find("a").click(function() {
    $(".dots-btn").toggleClass("btn-rotate");
    $(".btns").removeClass("expand").addClass("fade");
});
$('.menu-numeros').on('click', '.number', function(e){
    e.preventDefault();
    if( ( typeof(this.dataset.row) && typeof(this.dataset.section) ) !== 'undefined' ) {
        $slider_conocenos.slide( { 'row': this.dataset.row, 'section': this.dataset.section } );
    }
});

$('#dots-conocenos').on('click', '.dots', function(e){
    $('.dots').removeClass('active');
    e.preventDefault(e);
     if( ( typeof(this.dataset.row) && typeof(this.dataset.section) ) !== 'undefined' ) {
        $slider_conocenos.slide( { 'row': this.dataset.row, 'section': this.dataset.section } );
    }
    $(this).addClass('active');
});

$('#dots-conocenos').on('click', '.prev-slide', function(e){
    e.preventDefault();
    $slider_conocenos.slide_prev();
});

$('#dots-conocenos').on('click', '.next-slide', function(e){
    e.preventDefault();
    $slider_conocenos.slide_next();
});

// Eventos Espacios

$('#submenu-espacios').on('click', '.prev-slide', function(e){
    e.preventDefault();
    $slider_espacios.slide_prev();
});

$('#submenu-espacios').on('click', '.next-slide', function(e){
    e.preventDefault();
    $slider_espacios.slide_next();
});

$('#submenu-espacios').on('click', '.up-slide', function(e){
    e.preventDefault();
    $slider_espacios.slide_up();
});

$('#submenu-espacios').on('click', '.down-slide', function(e){
    e.preventDefault();
    $slider_espacios.slide_down();
});

$('#menu_espacios').on('click', '.list-espacios', function(e){
    e.preventDefault();
    if( ( typeof(this.dataset.row) && typeof(this.dataset.section) ) !== 'undefined' ) {
        $slider_espacios.slide( { 'row': this.dataset.row, 'section': this.dataset.section } );
    }
});

$('.item-button').on('click', function(e){
    e.preventDefault();
    if( ( typeof(this.dataset.row) && typeof(this.dataset.section) ) !=='undefined' ){
        $slider_espacios.slide( {'row': this.dataset.row, 'section': this.dataset.section } );
    }
    var newClass = this.getAttribute('data-btn');
    document.getElementsByClassName('dots-btn')[0].setAttribute('class', 'dots-btn ' + newClass);
});

//Active membresias, on and off.

var windowWidth =  $(window).width();
var membresiaHold = 1;

$('.membresia').on('click', function(){
       
        if (windowWidth< 968 ){
            var getData = $(this).data('membresia');
            $('#mem-'+getData).fadeIn(500);
            $('.membresia').removeClass('click');
            $('#responsive-info').fadeIn();
            $('.close-info').on('click', function(){
                $('#responsive-info').fadeOut();
                $('.responsive-content').fadeOut(500);                
            });
        } else {
            $('.membresia').addClass('click');
            var titulo = $(this).attr('id');
            $(this).addClass('onMembresia');
            if(membresiaHold == 1){
                membresiaHold = 0;
                $(".info").each(function(){
                    $(this).hide();
                    if( ( $(this).hasClass('info-'+titulo) ) ) {
                        $(this).fadeIn();
                    }
                });
            $(".click").not("#"+titulo).addClass('flip');
            } else if (membresiaHold == 0) {
                $('.onMembresia').each(function(){
                    $('.click').removeClass('flip');
                    $('.membresia').removeClass('onMembresia');
                    $('.close-membresia').fadeOut(1000);
                    membresiaHold = 1;
                });
        }
    }
});

// MAGNETIC 
var windowHeight = $(window).height();
var desactivateScroll = false;
var tempScrollTop = 0, currentScrollTop = 0;
var actualSection  = parseInt($(window).scrollTop()/windowHeight);

// RESPONSIVE & CONTACT FORM

var width_menu = 0;
var width_contact = 0;
var height_footer = 0;

$('.button-contact').on('click', function(e){
    e.preventDefault();
    if( ! $('#contact-form').hasClass('close-contact')){    
        $('#contact-form').addClass('close-contact');
        $('#contact-form').animate({ width: '0px'});
    } else {
        $('#contact-form').removeClass('close-contact');
        $('#contact-form').animate({ width: '640px'});
        width_contact = 640;
    }
});

$('#contact-form').on('click', function(){
    if( ! $('#contact-form').hasClass('close-contact')){    
        $('#contact-form').addClass('close-contact');
        $('#contact-form').animate({ width: '0px'});
    }
});

Hammer($drag_contact_el).on('dragleft', function(e){
    $('#contact-form').addClass('close-contact');
    $('#contact-form').animate({ width: '0px'});
});

$('.toogle-menu').on('click', function(e){
    e.preventDefault();
    if( ! $('#responsive-menu').hasClass('close-menu') ){
        $('#responsive-menu').addClass('close-menu');
        $('#button-responsive-nav').animate({'right': '0'}, 500);        
    } else {
        $('#responsive-menu').removeClass('close-menu');
        $('#responsive-menu').css({ width: '320px', display:'block'});
        $('#button-responsive-nav').animate({'right': '320px'}, 500);        
        width_menu = 320;
    }
});

$('.more-footer').on('click', function(){
    $(this).animate({'top':'-320px'},1000);
    $('#footer-info').animate({'bottom':'60px'},1000);    
    $('#footer-info').addClass('show-footer');
});
 
 var onFoo = 0;

$('#fixed-footer').on('click', function(){
    if (onFoo == 1) {
        $('#footer-info').animate({'bottom':'60px'},1000);
        $('.more-footer').animate({'top':'-320px'},1000);
        $('#footer-info').addClass('show-footer');
        onFoo = 0;
    } else if (onFoo == 0) {
        $('#footer-info').animate({'bottom':'-320px'},1000);
        $('.more-footer').animate({'top':'-15px'},1000);
        $('#footer-info').removeClass('show-footer');
        onFoo = 1;
    }
});

Hammer($btn_responsive_nav_el).on('dragleft', function(e){
    e.preventDefault();
    $('#responsive-menu').removeClass('close-menu');
    width_menu = ( (e.gesture.deltaX) * -3 );
    
    if( width_menu < 320 ){
        console.log( width_menu );
        $('#responsive-menu').css({
            display: 'block !important',
            width: width_menu + 'px'
        });
        $('#button-responsive-nav').animate({'right': width_menu + 'px'}, 500);
    }
});

Hammer($btn_responsive_nav_el).on('release', function(e){
    if( width_menu < 250)
        $('#responsive-menu').addClass('close-menu');
        $('#button-responsive-nav').animate({'right': '0'}, 500);
});

Hammer($btn_drag_contact_el).on('dragright', function(e){
    e.preventDefault();
    $('#contact-form').removeClass('close-contact');
    $('#contact-form').animate({ width: '0px'});
    onFoo = 1;    
    width_contact =((e.gesture.deltaX) * 3);    
    if( width_contact < 630 ){
        $('#contact-form').animate({  
            width: width_contact + 'px'
        });
    }
});

Hammer($btn_drag_contact_el).on('release', function(e){
    if( width_contact < 350){
        $('#contact-form').addClass('close-contact');
        $('#contact-form').animate({ width: '0px'});
    }
});

Hammer($btn_open_footer).on('dragup', function(e){
    height_footer = ( (e.gesture.deltaY) * -3 );
    if( height_footer < 70 ){
        $('#footer-info').animate({'bottom': height_footer +'px'
        },500,  function(){
            $(this).css({'z-index':'2000'});
        });
        $('.more-footer').animate({'top': -height_footer +'px'});
    }

});

$('#main-coworking').hover(function(){
        $('#hovercoworking').fadeIn(500);
        $('.moving').addClass('moving-coworking');
        $('.triangle').addClass('triangle-coworking');
    }, function(){
        $('#hovercoworking').fadeOut(100);
        $('.moving').removeClass('moving-coworking');
        $('.triangle').removeClass('triangle-coworking');
});
$('#main-clases').hover(function(){
        $('#hoverclases').fadeIn(500);
        $('.moving').addClass('moving-clases');
        $('.triangle').addClass('triangle-clases');
    }, function(){
        $('#hoverclases').fadeOut(100);
        $('.moving').removeClass('moving-clases');
        $('.triangle').removeClass('triangle-clases');
});
$('#main-juntas').hover(function(){
        $('#hoverjuntas').fadeIn(500);
        $('.moving').addClass('moving-juntas');
        $('.triangle').addClass('triangle-juntas');
    }, function(){
        $('#hoverjuntas').fadeOut(100);
        $('.moving').removeClass('moving-juntas');
        $('.triangle').removeClass('triangle-juntas');
});

$('#main-eventos').hover(function(){
        $('#hovereventos').fadeIn(500);
        $('.moving').addClass('moving-eventos');
        $('.triangle').addClass('triangle-eventos');
    }, function(){
        $('#hovereventos').fadeOut(100);
        $('.moving').removeClass('moving-eventos');
        $('.triangle').removeClass('triangle-eventos');
});

$('#main-recreativos').hover(function(){
        $('#hoverrecreativos').fadeIn(500);
        $('.moving').addClass('moving-recreativos');
        $('.triangle').addClass('triangle-recreativos');
    }, function(){
        $('#hoverrecreativos').fadeOut(100);
        $('.moving').removeClass('moving-recreativos');
        $('.triangle').removeClass('triangle-recreativos');
});

$('.privacy-button').on('click', function(){
  $('#privacy').addClass('privacy_on', function(){
    
  });
});
$('#privacy').on('click', function(){
  $(this).removeClass('privacy_on');
  $('#footer-info').removeClass('show-footer'); 
  $('#footer-info').animate({'bottom':'-310px'},1000);
});
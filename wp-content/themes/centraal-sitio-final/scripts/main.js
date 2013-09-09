var conocenos_start = function(){
}
var espacios_start = function(){
    $('#submenu-espacios').hide();
}
var espacios_slide = function( slide ){
    
    var space = $(slide).attr('id');
    var change = $('#'+space).data('category');

    mainSection = document.getElementById('nav-espacios');

    if( $(mainSection).attr('id') == $(slide).attr('id') ){
        $('#submenu-espacios').hide();
        $('.interaction-espacios').hide();        
    } else {

        $('#submenu-espacios').show();
        $('.interaction-espacios').show();

        $('.main-espacios').on('click', function(){
            actualSlide = $('#main-'+change).attr('id');            
            var color = $('#'+actualSlide).css('background-color');
            var image = $('#'+actualSlide+' span').css('background-image') ;

            $('#toogle-btn').css({'background-color': color});
            $('#toogle-btn span').css({'background-image': image});
            $('#toogle-btn').css({'border-color': color});
        });

        actualSlide = $('#main-'+change).attr('id');
        var color = $('#'+actualSlide).css('background-color');
        var image = $('#'+actualSlide+' span').css('background-image') ;

        $('#toogle-btn').css({'background-color': color});
        $('#toogle-btn span').css({'background-image': image});
        $('#toogle-btn').css({'border-color': color});
    }
}

var conocenos_slide = function( num_slide ){
    inicio = $(num_slide).attr('id');
    var one_slide = $('#conocenos-one').attr('id');
    var este = $(inicio);

    console.log(inicio, one_slide);

    if( inicio === one_slide ){
        $('#dots-conocenos').hide();
    } else {
        $('#dots-conocenos').show();
        }
}

var $slider_centraal = new Slider({ 
    transition: 'scroll-to', 
    start_position:{'row':0, 'section':0}, 
    menu_indicator: document.getElementById('menu-principal'),
});

var $slider_home = new Slider({
    transition: 'side-slide',
    start_position: {'row':0, 'section':0},
    slide_object:   pages_home,
    menu_indicator: document.getElementById('menu-dots'),
});

var $slider_conocenos = new Slider ({ 
    transition: 'scroll-to', 
    start_position: {'row':0, 'section':0},
    menu_indicator: document.getElementById('dots-conocenos'),
    start_function: conocenos_start,
    slide_function: conocenos_slide
});

var $slider_espacios = new Slider ( { 
    transition: 'side-slide', 
    start_position: {'row':0, 'section':0},
    slide_object:   pages_espacios,
    start_function: espacios_start,
    slide_function: espacios_slide,
    
});

var $contact_form = new Slider({ 
    transition: 'pageflip'
});

$slider_centraal_el = document.getElementById('centraal');
$slider_home_el = document.getElementById('carousel-home');
$slider_conocenos_el = document.getElementById('carousel-conocenos');
$slider_espacios_el = document.getElementById('grid-espacios');
$slider_eventos_el = document.getElementById('eventos');
$btn_responsive_nav_el = document.getElementById('button-responsive-nav');
$btn_drag_contact_el = document.getElementById('drag-contact');
$drag_contact_el = document.getElementById('contact-form');
$btn_open_footer = document.getElementById('show-foo');

$slider_centraal.init( $slider_centraal_el );
$slider_home.init( $slider_home_el );
$slider_conocenos.init( $slider_conocenos_el );
$slider_espacios.init( $slider_espacios_el );

$(window).on('resize', function(){
    $slider_centraal.resize_adjust();
    $slider_home.resize_adjust();
    $slider_conocenos.resize_adjust();
    $slider_espacios.resize_adjust();
});

var main_slider = $slider_centraal;
var active_slider = $slider_home;

var on_first_slide = true;
var next_slider = 'carousel-home';

var sliders_map = {
    'slider-centraal': $slider_centraal,
    'carousel-home': $slider_home, 
    'carousel-conocenos': $slider_conocenos,
    'grid-espacios': $slider_espacios
};

var reset_site = function(){
    $slider_home.reset();
    $slider_conocenos.reset();
    $slider_espacios.reset();
}

var move_slide = {
    'up' : function(){
        var status_slider = main_slider.slide_up();
        if( typeof( status_slider ) !== 'undefined'){
            on_first_slide = true;
            active_slider = sliders_map[status_slider.slider];
        } 
        reset_site();
    },
    'down' : function(){
        var status_slider = main_slider.slide_down();
        if( typeof( status_slider ) !== 'undefined'){
            on_first_slide = true;
            active_slider = sliders_map[status_slider.slider];
        } 
        reset_site();
    },
    'prev' : function(){
        var status_slider = active_slider.slide_prev();
        if( typeof( status_slider ) !== 'undefined' ){
            on_first_slide = true;
        } else {
            on_first_slide = false;
        }
    },
    'next' : function(){
        active_slider.slide_next();
        on_first_slide = false;
    }
};

var konami_code = [ '38', '38', '40', '40', '37', '39', '37', '39', '65', '66'];
var konami_code_tmp = konami_code.slice(0);
var snd = new Audio( themeURL + '/scripts/42/one-up.mp3' );

$(window).keydown(function(e){

    var keycode_function = {
        // Up
        '38' : move_slide['up'],
        //Down
        '40' : move_slide['down'],
        // Prev
        '37' : move_slide['prev'],
        // Next
        '39' : move_slide['next']
    };

    if( typeof( keycode_function[e.keyCode] ) === 'function'){
        keycode_function[e.keyCode]();
    }

    if( e.keyCode == konami_code[0] ){
        konami_code.splice( 0, 1 );
        if( konami_code.length == 0){
            snd.play();
            var holo = ''; var i=0;
            for (; i < '6f696e6b21'.length; i += 2)
                holo += String.fromCharCode(parseInt('6f696e6b21'.substr(i, 2), 16));
            console.log(holo);
            konami_code = konami_code_tmp.slice(0);
        }
    } else {
        konami_code = konami_code_tmp.slice(0);
    }

});

$touch_me = document.getElementById('centraal');

Hammer( $touch_me ).on('swipeleft', function(e){
    e.preventDefault();
    move_slide['next']();
});
Hammer( $touch_me ).on('swiperight', function(e){
    e.preventDefault();
    move_slide['prev']();
});
Hammer( $touch_me ).on('swipeup', function(e){
    e.preventDefault();
    move_slide['down']();
});
Hammer( $touch_me ).on('swipedown', function(e){
    e.preventDefault();
    move_slide['up']();
});


// GLOBAL FUNCTIONS

function resetSite(){
    
    $('.onMembresia').each(function(){
      $('.click').removeClass('flip');
      $('.membresia').removeClass('onMembresia');
      $('.close-membresia').fadeOut(1000);
      membresiaHold = 1;
    });
    
    $('#privacy').removeClass('on_privacy');

    $('#footer-info').animate({'bottom':'-320px'},1000);
    $('.more-footer').animate({'top':'-15px'},1000);
    $('#footer-info').removeClass('show-footer');

}

$('#main-menu').on('click', '.menu_indicator', function(e){
    e.preventDefault();

    $('.menu_indicator').removeClass('active');

    if( ( typeof(this.dataset.row) && typeof(this.dataset.section) ) !== 'undefined' ){
        var status_actual_slider = $slider_centraal.slide( { 'row': this.dataset.row, 'section': this.dataset.section } );

        if( typeof( status_actual_slider ) !== 'undefined'){
            on_first_slide = true;
            active_slider = sliders_map[status_actual_slider.slider];
        } 
    }

    $(this).addClass('active'); 
    reset_site();
});

$('.nav-responsive').on('click', '.item-nav', function(e){
    e.preventDefault();
    $(this).addClass('active');
    $('#responsive-menu').removeClass('open-menu');
    $('#centraal').removeClass('open-centraal');
    if((typeof(this.dataset.row) && typeof(this.dataset.section)) !== 'undefined'){
        var status_actual_slider = $slider_centraal.slide( { 'row': this.dataset.row, 'section': this.dataset.section } );

        if( typeof( status_actual_slider ) !== 'undefined'){
            on_first_slide = true;
            active_slider = sliders_map[status_actual_slider.slider];
        } 
    }

    reset_site();

});

$('#logo').on('click', 'a', function(e){
    e.preventDefault();
    $('.menu-item').removeClass('active');    
    if( ( typeof(this.dataset.row) && typeof(this.dataset.section) ) !== 'undefined' ){
        var status_actual_slider = $slider_centraal.slide( { 'row': this.dataset.row, 'section': this.dataset.section } );

        if( typeof( status_actual_slider ) !== 'undefined'){
            on_first_slide = true;
            active_slider = sliders_map[status_actual_slider.slider];
        } 

    }
    reset_site();
});

$('.menu-numeros').on('click', '.dots', function(e){
    e.preventDefault();
    $('.dots').removeClass('active');
    if( ( typeof(this.dataset.row) && typeof(this.dataset.section) ) !== 'undefined' ) {
        $slider_home.slide( { 'row': this.dataset.row, 'section': this.dataset.section } );
    }
    $(this).addClass('active');
});
$('.menu-numeros').on('click', '.prev-slide', function(e){
    e.preventDefault();
    $slider_home.slide_prev();
});
$('.menu-numeros').on('click', '.next-slide', function(e){
    e.preventDefault();
    $slider_home.slide_next();
});
$('.interaction-espacios').on('click', '.prev', function(e){
    e.preventDefault();
    $slider_espacios.slide_next();
});
$('.interaction-espacios').on('click', '.next', function(e){
    e.preventDefault();
    $slider_espacios.slide_prev();
});

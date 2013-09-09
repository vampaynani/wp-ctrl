var pages = new PageTransition({
    wrapper:             document.getElementById('eventos-wrapper'),
    init_page:           1,

    next_in_transition:  'moveFromRight',
    next_out_transition: 'moveToLeftEasing ontop',

    prev_in_transition:  'moveFromLeft',
    prev_out_transition: 'moveToRightEasing ontop',

});

var load_evento = function(id_post){
    console.log( id_post );
    var html = $('#calendar-eventos').find('[data-idpost="'+ id_post +'"]');
    $('#evento-detalle-content').html( html.html() );
}

var fin_transition = function(){
    console.log( 'fin transition' );
}

var close_evento = function(){
    console.log( 'cerrar evento' );
}

var empty_evento = function(){
    console.log( 'fin transition' );
    $('#evento-detalle-content').html('');
}

$('#calendar-eventos').on('click', '.item-calendar', function(e){
    e.preventDefault();
    pages.move_to( $('#evento-detalle'), load_evento( $(this).data('idpost') ), fin_transition );
});

$('#evento-detalle').on('click', '.evento-close', function(e){
    e.preventDefault();
    pages.move_to( $('#content-eventos'), close_evento, empty_evento );
});

var active_event_num = 0;
var num_eventos = $('#eventos_nav .dot').length;

$('#eventos_nav').on('click', '.dot', function(e){
    e.preventDefault();
    active_event_num = $(this).data('postnum');
    var section = '#carousel-eventos .eventonum_'+active_event_num;
    $('#carousel-eventos .item-evento').animate({opacity: 0}).removeClass('active');
    $('#carousel-eventos .dot').removeClass('active');
    $( section ).animate({opacity: 1}).addClass('active');
    $(this).addClass('active')
});

$('#eventos_nav').on('click', '.arrow', function(e){
    e.preventDefault();
    if( $(this).hasClass('prev') ){
        active_event_num = ( (active_event_num - 1) >= 0) ? active_event_num - 1 : active_event_num;
    } else if ( $(this).hasClass('next') ) {
        active_event_num = ( (active_event_num + 1) < num_eventos ) ? active_event_num + 1 : active_event_num;
    }
    var section = '#carousel-eventos .eventonum_'+active_event_num;
    if( ! $(section).hasClass('active') ){
        $('#carousel-eventos .item-evento').animate({opacity: 0}).removeClass('active');
        $('#carousel-eventos .dot').removeClass('active');
        $( section ).animate({opacity: 1}).addClass('active');
        var dot = '#carousel-eventos .dot[data-postnum="'+active_event_num+'"]';
        $(dot).addClass('active');
    }
});
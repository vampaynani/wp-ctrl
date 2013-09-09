Slider = ( function( options ) {
    'use strict';
    var sections        = [];
    var actual_slide    = { 'row': 0, 'section': 0 };
    var slider          = null;
    var transition      = 'scroll-to'; //Default transition.
    var slide_object    = null;
    var prev_slide      = null;
    var slide_direction = null;
    var menu_indicator  = null;
    var on_first_slide  = false;

    if( options.transition != null)         // Set the transition efect | To Do: More transitions
        transition = options.transition;
    if( options.slide_object != null)         // Set the transition efect | To Do: More transitions
        slide_object = options.slide_object;

    if( options.start_position != null)     // If start position's set
        actual_slide = options.start_position;
    if( options.menu_indicator != null)     // Set menu_indicator if exist
        menu_indicator = options.menu_indicator;

    return {
        'init' : function( el ){
            this.slider = el;
            $(this.slider).addClass(transition);
            // Asigns value to __rows
            for ( var i=0; i < $(this.slider).children('.sections-row').length; i++){
                var $actual_row = $(this.slider).children('.sections-row')[i];
                sections.push( $($actual_row).children('.section').length );
                $( $($actual_row).children('.section')  ).each(function(j){
                    this.setAttribute('data-row', i);
                    this.setAttribute('data-section', j);
                });
            }

            // .section-row's width
            this.resize_adjust();
            if( menu_indicator !== null)
                menu_indicator = $(menu_indicator).children('.menu_indicator');

            if( typeof( options.start_function ) !== 'undefined')
                options.start_function();

            if( typeof( options.start_position ) !== 'null')
                this.slide( actual_slide );
        },
        'resize_adjust' : function(){
            var sections_width = Math.max.apply(null, sections);
            var slider_rows = $(this.slider).children('.sections-row');
            var css_section = {}

            $(this.slider).css({
                'width': $(window).width(),
                'height': $(window).height()
            });

            $(slider_rows).children('.section').css({
                'width': $(window).width(),
                'height': $(window).height()
            });

            $(this.slider).children('.sections-row').css({
                'width': $(window).width() * sections_width,
                'height': $(window).height()
            });

        },
        'reset': function(){
            this.slide( { 'row': 0, 'section':0 } );
        },
        'slide_active' : function( status ){
            if( typeof(status) !== 'undefined' ){
                var first_row = $(this.slider).children('.sections-row')[0];
                var first_slide = $(first_row).children('.section')[0];
                if ( status )
                    $(first_slide).addClass('slider_active');
                else
                    $(first_slide).removeClass('slider_active');
            }
        },
        'slide' : function( coords ){

            var $slide_to_row = null;
            var $slide_to_section = null;

            if( typeof( $(this.slider).children('.sections-row')[coords.row] ) !== 'undefined' ){
                $slide_to_row = $(this.slider).children('.sections-row')[coords.row];
                if( typeof( $($slide_to_row).children('.section')[coords.section] ) !== 'undefined' ){

                    actual_slide.row = parseInt( coords.row );
                    actual_slide.section = parseInt( coords.section );

                    $slide_to_section = $($slide_to_row).children('.section')[actual_slide.section];
                    slide_direction = 'left';

                    if( typeof( options.slide_function ) !== 'undefined'){
                        options.slide_function( $slide_to_section );
                    }

                    if ( transition == 'scroll-to' ){
                        $(this.slider).stop().scrollTo( $($slide_to_section), 300);
                    } else if ( transition == 'side-slide' ){
                        slide_object.move_to( $($slide_to_section) );
                    } else {
                        $(this.slider).find('.section').removeClass('hold-on actual').addClass('back');
                        $(prev_slide).addClass('hold-on');
                        $( $slide_to_section ).removeClass('back').addClass('actual');
                        prev_slide = $slide_to_section;

                    }
                    if( menu_indicator ){
                        $.each( menu_indicator, function( key, indicator ) {
                          $(indicator).removeClass('active')
                        });

                        $( menu_indicator[ (coords.row ) + (coords.section) ] ).addClass('active');

                    }

                    if ( typeof( $slide_to_section.dataset.slider ) !== 'undefined' || (actual_slide.section == 0 && actual_slide.row == 0) ){
                        on_first_slide = ( actual_slide.section == 0 && actual_slide.row == 0) ? true : false;
                        return { on_first_slide: on_first_slide, slider: $slide_to_section.dataset.slider };
                    }
                }
            }
        },
        'slide_next' : function(){
            var actual_row = actual_slide.row;
            var actual_section = actual_slide.section;
            var scroll_status = false;

            if(actual_section >= ( sections[actual_row] - 1 ) ){
                if( ( actual_slide.row+1 ) < sections.length ){
                    actual_slide.row++;
                    actual_slide.section=0;
                    scroll_status = true;
                }
            } else {
                actual_slide.section++;
                scroll_status = true;
            }
            if(scroll_status){
                return this.slide( actual_slide );
            }
        },
        'slide_prev' : function(){
            var actual_row = actual_slide.row;
            var actual_section = actual_slide.section;
            var scroll_status = false;

            if(actual_section <= 0 ){
                if( (actual_slide.row-1) >= 0  ){
                    actual_slide.row--;
                    if( !isNaN( sections[actual_slide.row] - 1 ) ){
                        actual_slide.section=( sections[actual_slide.row] ) - 1;
                        scroll_status = true;
                    }
                }

            } else {
                actual_slide.section--;
                scroll_status = true;
            }
            if (scroll_status)
                return this.slide( actual_slide );
        },
        'slide_up' : function(){
            var actual_row = actual_slide.row;
            var actual_section = actual_slide.section;
            var scroll_status = false;

            if( (actual_row-1) >= 0 ){
                actual_slide.row--;
                actual_slide.section = 0;
                scroll_status = true;
            }

            if(scroll_status)
                return this.slide( actual_slide );

        },
        'slide_down' : function(){
            var actual_row = actual_slide.row;
            var actual_section = actual_slide.section;
            var scroll_status = false;

            if( (actual_row+1) < sections.length ){
                actual_slide.row++;
                actual_slide.section = 0;
                scroll_status = true;
            }

            if(scroll_status)
                return this.slide( actual_slide );
        }
    }
});
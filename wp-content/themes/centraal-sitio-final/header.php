<?php /*** header of our theme */ ?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title>
			<?php
	      		global $page, $paged;
	      		wp_title( '|', true, 'right' );
	      		// Add the blog name.
	      		bloginfo( 'name' );
	      		// Add the blog description for the home/front page.
	      		$site_description = get_bloginfo( 'description', 'display' );
	      		if ( $site_description && ( is_home() || is_front_page() ) )
	        		echo " | $site_description";
	      		// Add a page number if necessary:
	      		if ( $paged >= 2 || $page >= 2 )
	        		echo ' | ' . sprintf( __( 'Page %s', 'twentyeleven' ), max( $paged, $page ) );?>
		</title>
		<link rel="profile" href="http://gmpg.org/xfn/11" />
	    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

	    <link rel="stylesheet" href="<?php bloginfo('template_url') ?>/css/normalize.css" />
	    <link rel="stylesheet" href="<?php bloginfo('template_url')?>/css/main.css" />
	    <link rel="stylesheet" href="<?php bloginfo('template_url')?>/css/transitions-slide.css" />
  		<link rel="stylesheet" href="<?php bloginfo('template_url')?>/css/loader.css"/>	    
	    <!--[if lt IE 9]>
	    <script src="<?php echo get_template_directory_uri(); ?>/js/html5.js" type="text/javascript"></script>
	    <![endif]-->
	    <script src="<?php echo get_template_directory_uri(); ?>/bower_components/modernizr/modernizr.js"></script>
	    <?php wp_head(); ?>
	</head>
	<body onload="initialize()">
		<div id="page">
			<header>
				<div id="header">
					<div id="logo">
                        <a href="#home" data-row="0" data-section="0">
                            <img src="<?php bloginfo('template_url')?>/images/logo-rojo.png" alt="centraal"/>
                        </a>
                    </div>
                    <div id="main-menu">
                        <ul id="menu-principal">
                        	<li class="menu_indicator" style="display: none"><a class="menu-item"></a></li>
                            <li class="menu_indicator" data-row="1" data-section="0"><a href="#conocenos" id="" class="menu-item number">conócenos</a></li>
                            <li class="menu_indicator" data-row="2" data-section="0"><a href="#espacios" id="" class="menu-item number">espacios</a></li>
                            <li class="menu_indicator" data-row="3" data-section="0"><a href="#eventos" id="" class="menu-item number">eventos</a></li>
                            <li class="menu_indicator" data-row="4" data-section="0"><a href="#conocimiento" id="#conocimiento" class="menu-item number">comunidad</a></li>
                            <li class="menu_indicator" data-row="5" data-section="0"><a href="#comunidad" id="" class="menu-item number">conocimiento</a></li>
                            <li class="menu_indicator" data-row="6" data-section="0"><a href="#membresias" id="" class="menu-item number">membresías</a></li>
                        </ul>
                    </div>
				</div>
			</header>
			<a href="#" id="button-responsive-nav" class="toogle-menu"></a>
            <div id="responsive-menu" class="nav-responsive close-menu">
                <ul class="nav-responsive">
                    <li class="item-nav" data-row="0" data-section="0"><a href="#">home</a></li>
                    <li class="item-nav" data-row="1" data-section="0"><a href="#">conócenos</a></li>
                    <li class="item-nav" data-row="2" data-section="0"><a href="#">espacios</a></li>
                    <li class="item-nav" data-row="3" data-section="0"><a href="#">eventos</a></li>
                    <li class="item-nav" data-row="4" data-section="0"><a href="#">comunidad</a></li>
                    <li class="item-nav" data-row="5" data-section="0"><a href="#">conocimiento</a></li>
                    <li class="item-nav" data-row="6" data-section="0"><a href="#">membresias</a></li>
                </ul>
            </div>
            <a href="#" id="drag-contact" class="toogle-contact"></a>
            <div id="centraal" class="slider">

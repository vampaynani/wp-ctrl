<?php
/**
 * The template for displaying 404 pages (Not Found).
 *
 * @package WordPress
 * @subpackage Twenty_Eleven
 * @since Twenty Eleven 1.0
 */

 get_header(); ?>
  <div id="shell">
    
      <img src="<?php bloginfo("template_url")?>/images/plax/oops.png" data-xrange="10" data-yrange="10" id="plax-logo"/>
      <img src="<?php bloginfo("template_url")?>/images/plax/errorp.png" data-xrange="20" data-yrange="20" id="plax-sphere-0"/>      
      <img src="<?php bloginfo("template_url")?>/images/plax/plax01.png" data-xrange="30" data-yrange="30" id="plax-sphere-1"/>
      <a href="<?php bloginfo('url')?>"><img alt="ir a home" src="<?php bloginfo("template_url")?>/images/plax/plax02.png"  data-xrange="70" data-yrange="70" id="plax-sphere-2"/></a>
      <img src="<?php bloginfo("template_url")?>/images/plax/plax03.png"  data-xrange="50" data-yrange="50" id="plax-sphere-3"/>
      <img src="<?php bloginfo("template_url")?>/images/plax/plax04.png"  data-xrange="90" data-yrange="90" id="plax-sphere-4"/>
      <img src="<?php bloginfo("template_url")?>/images/plax/plax05.png"  data-xrange="40" data-yrange="40" id="plax-sphere-5"/>
    </div>
 	
    <script src="<?php bloginfo('template_url'); ?>/bower_components/jquery/jquery.js"></script>
    <script src="<?php bloginfo('template_url')?>/scripts/plax.js"></script> 	    
    <script type="text/javascript">
    	$('#shell img').plaxify()
        $.plax.enable()

    </script>
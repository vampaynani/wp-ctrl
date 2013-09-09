<?php
  function parse($text) {
    $text = str_replace("\r\n", "\n", $text);
    $text = str_replace("\r", "\n", $text);
    $text = str_replace("\n", "<br />", $text);
    $text = str_replace('"', '\\"', $text);
    return $text;
  }
  function hurl(){
    echo esc_url(home_url( '/' ));
  }
  function parseDate($date){
    $date = date_parse($date);
    switch($date['month']){
      case "01" : $month = "ENE"; break;
      case "02" : $month = "FEB"; break;
      case "03" : $month = "MAR"; break;
      case "04" : $month = "ABR"; break;
      case "05" : $month = "MAY"; break;
      case "06" : $month = "JUN"; break;
      case "07" : $month = "JUL"; break;
      case "08" : $month = "AGO"; break;
      case "09" : $month = "SEP"; break;
      case "10" : $month = "OCT"; break;
      case "11" : $month = "NOV"; break;
      case "12" : $month = "DIC"; break;
  }
  
    return '<span class="day">'.$date['day'].'</span><br/><span class="month">'.$month.'</span><br />'.$date['year'];
  }
    //EXCERPT
  function excerpt_length( $length ) {return 40;}
  add_filter( 'excerpt_length', 'excerpt_length' );
  
  function continue_reading_link() { return ''; }

  function auto_excerpt_more( $more ) { return ' &hellip;' . continue_reading_link();}
  add_filter( 'excerpt_more', 'auto_excerpt_more' );

  function custom_excerpt_more( $output ) {
  	if ( has_excerpt() && ! is_attachment() ) {
   		$output .= continue_reading_link();
   	}
   	return $output;
  }
  function get_imagen($idPost){
    $args = array(
       'post_type' => 'attachment',
       'numberposts' => null,
       'post_status' => null,
       'post_parent' => $id_post
    ); 
    
    $attachments = get_posts($args);
      if ($attachments) {
        foreach ($attachments as $attachment) {
          $dev = wp_get_attachment_url($attachment->ID);
        }
      }
        return $dev;
  }
  function get_uniq_img($id_post){
    $args = array(
      'post_type' => 'attachment',
      'numberposts' => null,
      'post_status' => null,
      'post_parent' => $id_post
    ); 
    $attachments = get_posts($args);
    if ($attachments) {
      foreach ($attachments as $attachment) {
        $dev = wp_get_attachment_url($attachment->ID);
      }
        
    }
    return $dev;
  }   
      add_filter( 'get_the_excerpt', 'custom_excerpt_more' );
  add_filter('show_admin_bar', '__return_false');
?>
<?php global $post; $myposts = get_posts('post_type=page&include=140'); ?>
<?php foreach( $myposts as $post ) : setup_postdata( $post ); ?>
    <?php the_excerpt(); ?>
<?php endforeach; wp_reset_query(); ?>
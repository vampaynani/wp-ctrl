<?php
  header('Content-type: application/json; charset=utf-8');
  include('../../../../../wp-load.php');
  if( isset( $_POST['page'] ) ){

    $args = array( 'category_name' => 'comunidad', 'posts_per_page' => 5, 'paged' => $_POST['page'] );
    $loop = new WP_Query( $args );
    $attachments = get_posts($args);

    $return_json = array();

    while ( $loop->have_posts() ) : $loop->the_post();
      $attachments = get_posts($args);
      $imgPost = '';
       $argsImg = array(
             'post_type' => 'attachment',
             'numberposts' => null,
             'post_status' => null,
             'post_parent' => $id
       ); 
       $attachments = get_posts($argsImg);
       if ($attachments) {
           foreach ($attachments as $attachment) {
                   $dev = wp_get_attachment_url($attachment->ID);
           }
       }
       $imgPost = $dev;
        
      $id= get_the_ID();
      $title = $post->post_title;
      $url= get_permalink();
      $twitter = get_post_meta($post->ID, "twitter", $single = true);
      $content = parse($post->post_content);

      $new_object = array('idpost' => $id, 'contenido' => $content, 'titulo' => $title, 'twitter' => $twitter, 'url' => $url, 'imagen' => $imgPost);
      array_push( $return_json , $new_object );

    endwhile;
  } else {
    $return_json = array('status' => 'error');
  }
  echo json_encode( $return_json );
?>
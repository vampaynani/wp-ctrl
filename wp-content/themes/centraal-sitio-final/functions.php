<?php 
	require('inc/common.php');
	require('inc/home.php');
	require('inc/conocenos.php');
	require('inc/espacios.php');
	require('inc/eventos.php');
	require('inc/comunidad.php');
	require('inc/conocimiento.php');
	require('inc/membresias.php');

	add_theme_support( 'post-thumbnails' );


add_action( 'init', 'post_comunidad' );

function post_comunidad() {
    register_post_type( 'comunidad',
        array(
            'labels' => array(
                'name' => __( 'Comunidad' ),
                'singular_name' => __( 'Miembros' ),
                'add_new' => __( 'Agregar miembro' ),
                'add_new_item' => __( 'Agregar miembro' ),
                'edit' => __( 'Editar' ),
                'edit_item' => __( 'Editar miembro' ),
                'new_item' => __( 'Nuevo miembro' ),
                'view' => __( 'Ver comunidad' ),
                'view_item' => __( 'Ver miembro' ),
                'search_items' => __( 'Buscar en comunidad' ),
                'not_found' => __( 'No se encontraron miembros' ),
                'not_found_in_trash' => __( 'No se encontraron miembros en la basura' ),
            ),
            'supports' => array('title','editor','thumbnail','custom-fields'),
            'public' => true,
         )
    );
}

function save_custom_post ( $post_id, $post = null ) {
    if ( !$post ) $post = get_post($post_id);
    if ( !current_user_can( 'edit_posts', $post->ID ) ) return;
    if ( 'comunidad' != $post->post_type ) return;
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) return;

$category_ids = array(2);
wp_set_object_terms($post->ID, $category_ids, 'category');
 }
add_action( "save_post", "save_custom_post", 10, 2 );
?>


<?php 
	function pageEventos(){	
?>
<?php 

function obtener_carousel_elems(){
        global $post;
            $id_type = get_cat_ID('eventos');
            $idPost = get_the_ID();
            $array_category = array($id_type);
            $args = array('category__and' => $array_category, 'numberposts' => 5);
            $myposts = get_posts( $args );
            $countdown= 0;
            $c=0;
            foreach( $myposts as $post ) :  setup_postdata($post); 
        ?>
        <div class="item-evento eventonum_<?php echo $c; if($c==0) echo " active"; ?>" >
            <img src="<?php echo get_uniq_img(get_the_ID());?>" class="image-eventos">
            <div class="evento-content">
                <h3><?php the_title(); ?></h3>
                <?php $ubicacion = get_post_meta($post->ID, "ubicacion", $single = true);  ?>
                <?php if($ubicacion !== '') { ?>
                    <a href="<?php echo $ubicacion;?>" target="_blank">ubicación</a>
                <?php } else {?>
                    <a href="#"></a>
                <?php }?>
                <div class="date-evento">
                    00-julio-2013                    
                </div>
                <p><?php the_content(); ?></p>

                <?php $registro = get_post_meta($post->ID, "registro", $single = true);  ?>                                
                
                <?php if($registro !== '') { ?>
                    <a href="<?php echo $registro;?>" target="_blank" class="registro">registro</a>
                <?php } else {?>
                    <a href="#" class="registro">registra tu evento</a>
                <?php }?>                                 
            </div>
        </div>           
            <?php 
                $c++;
                $countdown++;
                endforeach;
              ?>
            <div id="eventos_nav">
                <a href="#" class="arrow prev"></a>
                <div class="nav-carousel">
                    <?php for ($i= 0; $i < $countdown; $i++):?>
                        <a data-postnum="<?php echo $i; ?>" class="dot <?php if($i==0) echo 'active';?>"></a>
                    <?php endfor; ?>
                </div>
                <a href="#" class="arrow next"></a>                                               
            </div>                                                     
        <?php
    }
?>
<div class="sections-row" id="eventos">
    <div id="eventos-wrapper" class="et-wrapper section">
        <section id="content-eventos" class="et-section">
            <div id="carousel-eventos">
                <div class="panels-eventos">                    
                    <?php obtener_carousel_elems(); ?>
                </div>
                <a href="http://eventos.centraal.com" class="crea-evento" target="_blank">crea tu evento</a>                
            </div>
        </section>                        
    </div>
</div>				
<?php
	}
?>
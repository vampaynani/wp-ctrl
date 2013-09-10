<?php
	function pageComunidad(){	
?>
<div class="sections-row" id="conocimiento">
    <section id="content-conocimiento" class="section">
        <div id="carousel-conocimiento" class="slider">
            <div class="sections-row">
                <section id="conocimiento-one" class="section">
                    <div class="conocimiento">
                        <ul class="ul-conocimiento">
                            <?php 
                                global $post;
                                $id_type = 2;
                                $idPost = get_the_ID();
                                $array_category = array($id_type);
                                $args = array('category__and' => $array_category,   'post_type' => 'comunidad', 'posts_per_page' =>5, 'orderby'=> 'title', 'order' => 'ASC' );
                                $myposts = get_posts($args);
                                $c = 1;
                                foreach ($myposts as $post): setup_postdata($post);
                            ?>
                            <li data-item-comunidad="<?php echo $c; ?>" data-idpost="<?php echo get_the_ID(); ?>" class="item-conocimiento">
                                <div class="front">
                                    <div class="innerbg<?php echo $c; ?> quotebox">
                                        <div class="back quote-<?php echo $c; ?>">
                                            <div class="blockquote">
                                                <blockquote>
                                                   <p><?php the_content();?></p>
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>
                                    <img src="<?php echo wp_get_attachment_url( get_post_thumbnail_id(get_the_ID()) ); ?>" width='170' height="200" class="image-conocimiento">
 
                                </div>
                                <div class="text-<?php echo $c; ?> personal">
                                    <p><?php the_title();?></p>

                                    <?php $empresa = get_post_meta($post->ID, "empresa", $single = true);  ?>                                
                                        <?php if($empresa !== '') { ?>
                                    <p><?php echo $empresa;?></p>
                                    <?php } else { }?> 


                                        <?php $twitter = get_post_meta($post->ID, "twitter", $single = true);  ?>                                
                                        <?php if($twitter !== '') { ?>
                                    <a href="http://twitter.com/<?php echo $twitter; ?>" target="_blank">@<?php echo $twitter;?></a>
                                    <?php } else {?>
                                        <a></a>                                  
                                    <?php }?> 
                                </div>
                            </li>  
                             <?php
                                $c++;
                                endforeach;         
                            ?>    
                            </ul>
                            <div id="nav-comunidad">
                                <?php   
                                    global $wpdb;
                                    $categoria = 'comunidad';
                                    $catObj = get_category_by_slug($categoria);
                                    $numPosts  = $catObj->count;
                                    $numPages =  round($numPosts/5);
                                        echo '<div class="paginate">';
                                    for($i=1; $i<= $numPages+1; $i++){
                                        echo "<a class='pagina dot-page";
                                        if ($i==1) {
                                            echo " active";
                                        }
                                        echo "' data-pagina='".$i."'></a>";
                                    }
                                    echo '</div>';
                                ?>
                            </div>
                    </div>
                    <p class="slogan"><span>idea de comunidad, </span>comunidad de ideas</p>
                </section>
            </div>
        </div>
    </section>
</div>
<?php 
	}
?>
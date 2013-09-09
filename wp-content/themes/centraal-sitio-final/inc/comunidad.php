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
                                $args = array('category__and' => $array_category, 'posts_per_page' =>5);
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
                                    <img src="<?php echo get_uniq_img(get_the_ID());?>" width='170' height="200" class="image-conocimiento">
                                </div>
                                <div class="text-<?php echo $c; ?> personal">
                                    <p><?php the_title();?></p>
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
                                    for($i=1; $i<= $numPages; $i++){
                                        echo "<a class='pagina dot-page' data-pagina='".$i."'></a>";
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
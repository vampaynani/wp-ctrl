<?php 
	/*THE FOOTER
	*
	* @package Wordpress
	* @subpackage centraal
	*/
?>
    <div id="privacy">
        <div class="privacy-content">
          <h3>Responsable de la protección de sus datos personales</h3>
          <p>Centraal Procopio dei Coltelli SAPI de CV (Centraal), con domicilio en Zamora 187 Col. Condesa México, Distrito Federal 06140 , México, es responsable del tratamiento (uso) de sus datos personales.</p>
          <h3>¿Para qué fines recabamos y utilizamos sus datos personales?</h3>
          <p>Sus datos personales serán utilizados para las siguientes finalidades:</p>
          <p>Proveer los productos solicitados., Proveer los servicios solicitados y/o contratados., Responder a sus requerimientos de información, atención y servicio., Evaluar la calidad del servicio que le brindamos., Archivo derequerimientos de información, atención y servicio., Evaluar la calidad del servicio que le brindamos., Archivo de registros y expediente de la relación contractual para seguimiento de servicios futuros., Gestión financiera, facturación y cobro., Dar cumplimiento a las obligaciones y compromisos que hemos contraído con usted.</p>
          <p>Adicionalmente, sus datos personales podrán ser utilizados para:</p>
          <p>Promoción y mercadeo de productos y servicios, Elaborar estudios y programas que son necesarios paradeterminar hábitos de uso y consumo., Ofrecerle nuevos productos y servicios a la medida de sus intereses y necesidades., Realizar evaluaciones periódicas de nuestros productos y servicios a efecto de mejorar la calidad de los mismos., Notificarle sobre nuevos servicios o productos que tengan relación con los ya contratados o adquiridos., Boletines y comunicados sobre nuestra organización.</p>
          <p>En caso de que no obtengamos su oposición expresa para que sus datos personales sean tratados también con estas finalidades entenderemos que ha otorgado su consentimiento en forma tácita para ello.</p>
          <p>Usted puede conocer los términos y alcances de nuestro Aviso de Privacidad integral en: centraal.com</p>

          <div class="foo-lightbox">
            <img src="<?php bloginfo('template_url')?>/images/ifai01.png">
            <p class="foo-ifai">Si después de haber ejercido sus Derechos ARCO ante Centraal Procopio dei Coltelli SAPI de CV por medio de los mecanismos establecidos en este Aviso de Privacidad, usted considera que la respuesta ha sido insatisfactoria o incompleta; o presume que su derecho de protección de datos personales ha sido lesionado por alguna conducta o acción de nuestra parte; o cuenta con evidencia de que en el tratamiento de sus datos personales existe alguna violación a las disposiciones previstas en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, podrá interponer la queja o denuncia correspondiente ante el IFAI. Para mayor información visite: <a href="http://inicio.ifai.org.mx/_catalogs/masterpage/ifai.aspx" target="_blank">www.ifai.org.mx</a><span>Fecha de modificación Apr 18, 2013 12:01 PM / Folio: 103715856</span></p>
            <img src="<?php bloginfo('template_url')?>/images/ifai02.png">

            </div>
        </div>
    </div>
	<div id="footer">
        <div id="fixed-footer">
            <a href="#" id="show-foo" class="more-footer"></a>
            <a href="#" class="button-contact">contacto</a>
            <a class="privacity"><span></span>Todos los derechos reservados ®</a>
        </div>
        <div id="footer-info">
            <div class="column-footer">
                <div class="more-info">
                    <h5>más información</h5>
                    <p>Déjanos tus datos y te mantendrémos al día</p>
                    <form id="newsletter">
                        <input type="text" placeholder="mail">
                        <input type="submit" value="enviar" class="btn-newsletter">
                    </form>
                </div>
            </div>
            <div class="column-footer">
                <div class="miembros">
                    <h5>miembros</h5>
                    <ul>
                        <li><a href="">ingresa</a></li>
                        <li><a class="privacy-button">aviso de privacidad</a></li>
                    </ul>
                    <div class="social-networks">
                        <a href="#" class="fb"></a>
                        <a href="#" class="vi"></a>
                        <a href="#" class="tw"></a>
                        <a href="#" class="yt"></a>                                        
                    </div>
                </div>
            </div>
            <div class="column-footer">
                <div id="maps">
                    <h5>ubicación</h5>
                    <p>zamora 187, condesa 06140 méxico d.f. <br> +52 55 3547 1780</p>
                    <div id="map_canvas" style="width:420px; height:160px"></div>
                </div>
            </div>
        </div>
    </div>
    <div id="contact-form" class="nav-contact close-contact">
        <div class="side-contact">
            <div class="title">
                <h3>contacto</h3>
            </div>
            <div class="address">
                <p>zamora 187, condesa 06140 méxico d.f. +52 55 3547 1780</p>
            </div>
            <div class="social-networks">
                <a href="#" class="fb"></a>
                <a href="#" class="vi"></a>
                <a href="#" class="tw"></a>
                <a href="#" class="yt"></a>                
            </div>
        </div>
        <form id="contact" >
            <input type="text" placeholder="nombre" name="nombre" id="nombre">
            <input type="text" placeholder="email" name="email" id="email">
            <input type="text" placeholder="teléfono" name="telefono" id="telefono">
            <textarea value="comentario"></textarea>
            <input type="sumbit" value="enviar" id="submit">
        </form>
    </div>
</div>    
    <div id="loaderContainer">
        <div id="loader"><span id="timer"></span><span id="loading-txt">Caargaando</span></div>
    </div>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script>window.jQuery || document.write("<script src='<?php bloginfo('template_url')?>/bower_components/jquery/jquery.js'><\/script>")</script>

    <script src="<?php bloginfo('template_url'); ?>/scripts/jquery.scrollTo-1.4.3.1-min.js"></script>
    <script src="<?php bloginfo('template_url'); ?>/scripts/hammer.min.js"></script>
    <script>
      // Global Variables from Wordpress.
      var Url = "http://"+window.location.hostname;
      var themeURL = "<?php echo bloginfo('template_url'); ?>";
      var siteURL = "<?php echo bloginfo('url'); ?>";

    var jsonConocimiento = $.ajax({
        url: "http://conocimiento.centraal.com/wp-content/themes/comunidad/script/json/conexion.json.php",
        data: {post:1},
        dataType: "json",
        async: false,
    }).responseText;

    </script>
    <script src="https://maps.google.com/maps/api/js?sensor=true"></script>        
    <script src="<?php bloginfo('template_url'); ?>/scripts/transitions.js"></script>
    <script src="<?php bloginfo('template_url'); ?>/scripts/slider.js"></script>
    <script src="<?php bloginfo('template_url'); ?>/scripts/google.maps.js"></script>        
    <script src="<?php bloginfo('template_url'); ?>/scripts/main.js"></script>
    <script src="<?php bloginfo('template_url'); ?>/scripts/actions.js"></script>
    <script src="<?php bloginfo('template_url'); ?>/scripts/eventos.js"></script>
    <script src="<?php bloginfo('template_url'); ?>/scripts/conocimiento.js"></script>    
    <script src="<?php bloginfo('template_url'); ?>/scripts/comunidad.js"></script>
    <script>
        $('#loaderContainer').fadeOut();
    </script>
<!-- endbuild -->
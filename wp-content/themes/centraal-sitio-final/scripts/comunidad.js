$('#nav-comunidad').on('click', '.pagina', function( e ){
    e.preventDefault();
    $('#nav-comunidad .pagina').removeClass('active');
    $(this).addClass('active');
    var page = $(this).data('pagina');
    $.ajax({
      url: themeURL+'/scripts/json/comunidad.json.php',
      type: 'post',
      dataType: "json",
      data: { page: page },
      success: function( data ){
        console.log( data );
        var i  = -1;
        var html = '';
        $('.ul-conocimiento').fadeOut(800, function(){
          $.each(data, function(key, item) {    
          i++;      
          html += "<li data-item-comunidad='"+(i+1)+"' data-idpost='"+item.idpost+"' class='item-conocimiento'><div class='front'><div class='innerbg"+(i+1)+" quotebox'><div class='back quote-"+(i+1)+"'><div class='bockquote'><p>"+item.contenido+"</p></div></div></div><img src='"+item.imagen+"' class='image-conocimiento'></div><div class='personal text-"+(i+1)+"'><p>"+item.titulo+"</p><a href='http://twitter.com/"+item.twitter+"' target='_blank'>@"+item.twitter+"</a></div></li>";}
          ); 
          $('.ul-conocimiento').html(html);
          $('.ul-conocimiento').fadeIn(500);
        });
      }
    });
});
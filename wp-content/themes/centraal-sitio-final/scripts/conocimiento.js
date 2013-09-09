$(document).ready(function(){
	var a = -1;
 	var html = '';
 $.each($.parseJSON(jsonConocimiento), function(x, z) {		 	
		html += "<div class='article'><div class='category "+z.categoria+"'></div><article><img src='"+z.imagen+"' class='image-article'><h3>"+z.titulo+"</h3><p>"+z.contenido+"</p><a target='_blank' href='"+z.url+"'>Continuar leyendo -></a></article></div>";
		});
	$('#comunidad-items').html(html);	
});
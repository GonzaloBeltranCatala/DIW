$.getJSON( "incidencias", function( data ) {
  var items = [];
    $.each( data, function( key, val ) {
  console.log(key);
  
  //items.push( "<li id='" + key + "' class='list-group-item'>" + val.alumne + val.profesor + "</li>");

  var fila="<tr><td>"+val.alumne+"</td><td>"+val.grupo+"</td><td>"+val.profesor+"</td><td>"+val.data+"</td><td><a href='formulario-rellenado.html'>Editar</a>"+"</td><td> <button>Borrar</button> "+"</td></tr>"


  $( "#tablalista" ).append(fila);


  $("button").click(function(){
    $("#tablalista").remove();
  });

  });
 
  //$( "<ul/>", {
    //"class": "list-group",
    //html: items.join( "" )
  //}).appendTo( "#divLista" );
});
 


$.getJSON( "incidencias", function( data ) {
  var items = [];
    $.each( data, function( key, val ) {
  console.log(key);
  
  //items.push( "<li id='" + key + "' class='list-group-item'>" + val.alumne + val.profesor + "</li>");

  var fila="<tr><td>"+val.alumne+"</td><td>"+val.grupo+"</td><td>"+val.profesor+"</td><td>"+val.data+"</td></tr>"


  $( "#tablalista" ).append(fila);

  });
 
  //$( "<ul/>", {
    //"class": "list-group",
    //html: items.join( "" )
  //}).appendTo( "#divLista" );
});
 

//eventlisteners
function cargar() {

document.getElementById("prov").addEventListener("change", cargarMunicipio);

}

function cargarMunicipio() {
 
var peticion = new XMLHttpRequest();    

var provincias = document.getElementById("prov").value;

var ip="18.224.45.108";

peticion.open("GET","http://"+ip+":8080/javascript/index.php?idProvincia="+provincias);
peticion.send(null);

peticion.addEventListener("readystatechange",obtenerXML);

}

function obtenerXML(){
    if(this.readyState == 4 && this.status == 200) {

        var xml = this.responseXML;
        
        var municipios = xml.getElementsByTagName("municipio");
        
        
        document.getElementById("mun").innerHTML="";
        
        
          var opt2=document.createElement("option");
            
            var seleccionar = document.createTextNode("Seleccionar");
            
            opt2.appendChild(seleccionar);
            
            document.getElementById("mun").appendChild(opt2);
        
        
        for(var i=0;i<municipios.length;i++){
            
            var municipio=municipios[i].firstChild.nodeValue;
            
            var opt=document.createElement("option");
            
            var texto = document.createTextNode(municipio);
            
            opt.appendChild(texto);
            
            document.getElementById("mun").appendChild(opt);
            
        }
        
}
}




//poner a final para cargar eventlistener
window.addEventListener("load",cargar);
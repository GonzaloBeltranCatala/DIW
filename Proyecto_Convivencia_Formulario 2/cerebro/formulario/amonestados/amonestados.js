
//eventlisteners
function cargar() {

    document.getElementById("seleccion").addEventListener("change", selecion, false);
   

}

function selecion(){
    var x = document.getElementById("seleccion").value;

    switch(x) {
        case   document.getElementById("b"):
        
        document.getElementById("b")=document.getElementById("b").style.order="1";

          break;
        case y:
         
          break;
        default:
          
      } 
    
}




//poner a final para cargar eventlistener
window.addEventListener("load", cargar);

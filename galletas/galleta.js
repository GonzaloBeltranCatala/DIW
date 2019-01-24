

//eventlisteners
function cargar() {
    document.getElementById("rex").addEventListener("click", rex, false);
    document.getElementById("estego").addEventListener("click", estego, false);
    document.getElementById("huevo").addEventListener("click", huevo, false);
    document.getElementById("comprar").addEventListener("click", total, false);

}

function rex(){

    var i=document.getElementById("pantalla1").value;
    
    i = Number(i) + 1;
    document.getElementById("pantalla1").value = i;
}

function estego(){

    var i=document.getElementById("pantalla2").value;
    
    i = Number(i) + 1;
    document.getElementById("pantalla2").value = i;
}

function huevo(){

    var i=document.getElementById("pantalla3").value;
    
    i = Number(i) + 1;
    document.getElementById("pantalla3").value = i;
}



function total(){
    var total = Number(document.getElementById("pantalla1").value) + Number(document.getElementById("pantalla2").value) + Number(document.getElementById("pantalla3").value);
   
    document.getElementById("pantalla4").value = total +" galletas compradas";
}





//poner a final para cargar eventlistener
window.addEventListener("load", cargar);
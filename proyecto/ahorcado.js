
var mostrar = [];
var bloqueo = [];
var fallos = 6;
var aciertos = 0;
var numpista;
var ip = "192.168.4.5";

//eventlisteners
function cargar() {

    botones();

    document.getElementById("iniciar").addEventListener("click", inicio, false);

    document.getElementById("temas").addEventListener("change", llamada, false);

    document.getElementById("boton-pista").addEventListener("click", pista, false);



}

//eventlistener de los botones
function botones() {
    let botones = document.getElementsByClassName("boton");

    for (let i = 0; i < botones.length; i++) {

        botones[i].addEventListener("click", botonAcciones, false);
    }


}

//acciones de cada boton
function botonAcciones() {

    letras(this.id);

    desactivar(this.id);

}

//llamada para obtener palabra
function llamada() {

   
//desactiva la opcion temas del select para no poder seleccionarla
    let temas = document.getElementById("temas").value;

    if (temas != "0") {
        document.getElementById("iniciar").disabled = false;

    }
    document.getElementById("esconder").disabled = true;


    let peticion = new XMLHttpRequest();

    peticion.open("GET", "http://" + ip + "/proyecto/Modelo/palabra.php?ID_Tema=" + temas);

    peticion.send(null);

    peticion.addEventListener("readystatechange", obtenerPalabra);



}

function obtenerPalabra() {
    if (this.readyState == 4 && this.status == 200) {
        //obtenemos palbra y su ID
        let solucion = this.responseText;

        //substring para darle solo el valor del ID
        numpista = solucion.substring(solucion.indexOf("-")+1,solucion.length);
        
        //substring para darle solo el valor de la palabra
        solucion = solucion.substring(0,solucion.indexOf("-"));


        document.getElementById("solucion").value = solucion;

    }
}

//llamada para obtener pista
function pista() {

    //+1 fallo por usar la pista
    document.getElementById("boton-pista").disabled = true;
    
    fallos--;
    imagenes();
    document.getElementById("fallos").value = fallos;

    let peticion = new XMLHttpRequest();

    peticion.open("GET", "http://" + ip + "/proyecto/Modelo/pista.php?ID_Palabra=" + numpista);

    peticion.send(null);

    peticion.addEventListener("readystatechange", obtenerPista);

}

function obtenerPista() {
    if (this.readyState == 4 && this.status == 200) {

        let solucion = this.responseText;

    
        document.getElementById("texto-pista").value = solucion;

    }
}

//pasar a minuscula
function palabra() {

    let palabra = document.getElementById("solucion").value;

    let res = palabra.toLowerCase();

    return res;


}

//boton de iniciar juego
function inicio() {

    document.getElementById("menu").style.display = "none";

    document.getElementById("juego").style.display = "block";

    vacio();

    teclado();

}

//teclado
function teclado() {
    document.addEventListener("keypress", function (event) {

        let letra = event.code;

        for (let i = 0; i < bloqueo.length; i++) {

            if (bloqueo[i] == letra) {
                letra = null;
            }
        }

        if (letra != null) {

            //code para la ñ
            if (letra == "Semicolon") {

                letras("ñ");

                desactivar("ñ");

                bloqueo.push("Semicolon");
            }
            //resto de letras
            else{
                let res = letra.substring(letra.length -1);

                res = res.toLowerCase();
    
                letras(res);
    
                desactivar(res);
    
                bloqueo.push(letra);
            }
        }
    })
}

//inicio de juego muestra vacia todas las casillas
function vacio() {

    for (let i = 0; i < palabra().length; i++) {

        if (palabra()[i] === " ") {
            mostrar[i] = " / ";

        }
        else {
            mostrar[i] = " _ ";
            aciertos++;
        }

    }

    document.getElementById("pantalla").value = mostrar;
    document.getElementById("aciertos").value = aciertos;
    document.getElementById("fallos").value = fallos;

}


//desactiva despues de pulsar boton
function desactivar(letra) {
    document.getElementById(letra).disabled = true;
}

//rellenar palabra
function letras(letra) {

    let aux = aciertos;

    for (let i = 0; i < palabra().length; i++) {

        if (palabra()[i] === letra) {
            mostrar[i] = letra;
            aciertos--;
        }
    }

    if (aux == aciertos) {
        fallos--;
        imagenes();
    }


    document.getElementById("pantalla").value = mostrar;

    document.getElementById("aciertos").value = aciertos;
    document.getElementById("fallos").value = fallos;

    if (aciertos == 0) {
        ganar();
    }

}

//imagenes de la horca
function imagenes() {

    switch (fallos) {
        case 5:
            document.getElementById("horca").src = "../img/falloUno.png";
            break;

        case 4:
            document.getElementById("horca").src = "../img/falloDos.png";
            break;

        case 3:
            document.getElementById("horca").src = "../img/falloTres.png";
            break;

        case 2:
            document.getElementById("horca").src = "../img/falloCuatro.png";
            break;

        case 1:
            document.getElementById("horca").src = "../img/falloCinco.png";
            break;

        case 0:
            document.getElementById("horca").src = "../img/falloSeis.png";
            perder();
            break;

        default:
            break;
    }
}

//pierdes juego
function perder() {

    alert("Has Perdido\nLa Solucion era " + document.getElementById("solucion").value);

    document.getElementById("iniciar").disabled = true;

    document.getElementById("esconder").disabled = true;

    document.getElementById("texto-pista").value ="";

    document.getElementById("temas").value = "0";

    location.reload();

}

//ganas juego
function ganar() {
    alert("Has Ganado");

    document.getElementById("iniciar").disabled = true;

    document.getElementById("esconder").disabled = true;

    document.getElementById("texto-pista").value ="";

    document.getElementById("temas").value = "0";

    location.reload();

}


//poner a final para cargar eventlistener
window.addEventListener("load", cargar);
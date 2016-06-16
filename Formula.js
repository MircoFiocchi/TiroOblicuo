function cargarDistancia(){

    var el=document.getElementById("ingresardatos").elements;
    var url = 'listo.html#' + "#" + el["Vo"].value + "#" + el["titao"].value;
    window.location.replace(url);

}

function cargarTiempo(){
    var el=document.getElementById("ingresardatos").elements;

    var url = 'listo.html#' + "#" + el["Vo"].value ;
    window.location.replace(url);

}

function cargarAltura(){

    var el=document.getElementById("ingresardatos").elements;

    var url = 'listo.html#' + "#" + el["Vo"].value + "#" + el["titao"].value;
    window.location.replace(url);

}
function MostrarDist() {

    var myArr = window.location.hash.split('#');
    var Vo = (myArr[2]);
    var titao = (myArr[3]);
    var titaoRad;

    titaoRad=titao*Math.PI/180;

    var dist = ((Vo* Math.sin(titao)) / 9.8);
    var unidad = "m";

    document.getElementById('rDist').value = dist+unidad;

}

function MostrarTiempo() {

    var myArr = window.location.hash.split('#');
    var Vo = (myArr[2]);


    var tiempo;
    tiempo = (((document.getElementById("Vo").value * 2) / 9.8));
    var unidad = "s";

    document.getElementById('rtiempo').value =  tiempo + unidad;

}
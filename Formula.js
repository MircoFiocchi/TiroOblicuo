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
    var Vo = (myArr[1]);
    var titao = (myArr[2]);

    var dist = (((document.getElementById("Vo").value ^ 2) * (Math.sin(document.getElementById("titao")))) / 9.8);
    var unidad = "m";

    document.getElementById('rdist').value = dist + unidad;

}

function MostrarTiempo() {

    var myArr = window.location.hash.split('#');
    var Vo = (myArr[2]);


    var tiempo;
    tiempo = (((document.getElementById("Vo").value * 2) / 9.8));
    var unidad = "s";

    document.getElementById('rtiempo').value =  tiempo + unidad;

}
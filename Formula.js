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

    if (isNaN(Vo)) {
        alert('La velocidad inicial debe ser un numero');
        return;
    }
    if (isNaN(titao)) {
        alert('El angulo inicial debe ser un numero');
        return;
    }
    
    titaoRad=titao*Math.PI/180;

    var dist = ((Vo* Math.sin(titao)) / 9.8);
    var unidad = "m";

    var rDist = dist+unidad;
    var rTiempo = ((Vo* 2) / 9.8)+" s";



    document.getElementById('rDist').value = rDist.toString().substr(0,rDist.toString().indexOf('.')+3);
    document.getElementById('rtiempo').value = rTiempo.toString().substr(0,rTiempo.toString().indexOf('.')+3);



}

function MostrarTiempo() {

    var myArr = window.location.hash.split('#');
    var Vo = (myArr[2]);
    alert(Vo);

    var tiempo;
    tiempo = (((document.getElementById("Vo").value * 2) / 9.8));
    var unidad = "s";

    document.getElementById('rtiempo').value =  tiempo + unidad;

}
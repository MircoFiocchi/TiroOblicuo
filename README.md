# TiroOblicuo
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="Estilo1.css">
    <meta charset="UTF-8">
    <title>Problema Fisica "Tiro Oblicuo"</title>
</head>
<body>
<div class="titulo">
    <h1>
        FISICA <br>
        Tiro Oblicuo
    </h1>
</div>
<div id="atencion">
    <h4>ATENCION</h4>
    ¡Se trabaja con m/s!
    <button type="button">
        Convertir
    </button>
</div>
<div>
    <div class="INGRESARDATOS">
        <h4>
            INGRESO DE DATOS
        </h4>
        <button type="button">Ingresar otros datos</button>
    </div>
    <div>
        Velocidad inicial
        <input type="text" name="Vo">
        <select name="UnidadVo">
            <option value="m/s">m/s</option>
            <option value="km/h">km/h</option>
        </select><br>
        Angulo inicial
        <input type="text" name="titao">
        <select name="Unidadtitao">
            <option value="grados">grados</option>
            <option value="radianes">radianes</option>
        </select><br>
        Altura inicial
        <input type="text" name="Ho">
        <select name="UnidadHo">
            <option value="mo">m</option>
            <option value="kmo">km</option>
        </select><br>
        Altura final
        <input type="text" name="Hf">
        <select name="UnidadHf">
            <option value="mf">m</option>
            <option value="kmf">km</option>
        </select><br>
    </div>
    <div>
        <br>
        <button type="button">Ingresar otros datos</button>
        <br>

    </div>
</div>
<div>
    <br>
    <button type="button">Realizar el calculo</button>
    <br>
</div>
<br>
<iframe width="640" height="360" src="https://www.youtube.com/embed/hGjyJ2hpbVA" frameborder="0" allowfullscreen></iframe>
<br>
</body>

</html>

body{
    background: blue;

}
.titulo{
    background: red;
}
.INGRESARDATOS h4{
    font-size: -40px;

    top: 100px;
    background: green;
    width: 150px;
}

#atencion{
    position: absolute;
    right: 20px;
    background: wheat;
}

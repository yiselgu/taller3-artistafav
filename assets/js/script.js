var name;
var age;
var genero;
var preferida;

var mensajeNombre = document.getElementById('name')
var mensajeEdad = document.getElementById('age')
var mensajegenero = document.getElementById('genero')
var mensajecancion = document.getElementById('preferida')


function artista() {
    name = prompt("Escribe el Nombre del Artista")
    mensajeNombre.innerText = name 

    age = prompt("Escribe la Edad del Artista")
    mensajeEdad.innerText = age 

    genero = prompt("¿Que Tipo de Musica Canta su Artista Favorito?")
    mensajegenero.innerText = genero 

    preferida = prompt("¿Cual es Tu Cancion Preferida?")
    mensajecancion.innerText = preferida 

}
/**
 * Created by alejandropalacio on 13/02/17.
 */
function holaMundo(nombre) {
    return "hola mundo !!" + nombre;
}
var nombre = "Alejo";
var resultado = holaMundo(nombre);
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = resultado;
// variables y tipos
var edad = 619;
var programador = true;
var lenguajes = ["java", "SQL", "TypeScript"];
etiqueta.innerHTML = nombre + " - " + edad + " - " + lenguajes[1];
var a = 7;
var b = 12;
if (a = 7) {
    var a_1 = 4;
    var b = 1;
    console.log("Dentro del if -->" + a_1 + " - " + b);
}
console.log("Fuera del if -->" + a + " - " + b);
// funciones y tipado
function devuelveNumero(num) {
    return "numero devuelto " + num;
}
function devuelveString(texto) {
    if (texto == "hola") {
        var num = 69;
    }
    else {
        var num = 10;
    }
    return num;
}
alert(devuelveNumero(34));
alert(devuelveString("nada"));

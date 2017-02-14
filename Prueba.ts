/**
 * Created by alejandropalacio on 13/02/17.
 */
function holaMundo(nombre){
    return "hola mundo !!" + nombre;
}

var nombre = "Alejo";
var resultado = holaMundo(nombre);

var etiqueta = <HTMLElement> document.getElementById("container");
etiqueta.innerHTML = resultado;
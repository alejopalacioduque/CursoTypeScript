/**
 * Created by alejandropalacio on 13/02/17.
 */
function holaMundo(nombre){
    return "hola mundo !!" + nombre;
}

var nombre : string = "Alejo";
var resultado = holaMundo(nombre);

var etiqueta = <HTMLElement> document.getElementById("container");
etiqueta.innerHTML = resultado;

// variables y tipos

var edad : number = 619;
var programador : boolean = true;
var lenguajes : Array<string> = ["java", "SQL", "TypeScript"];

etiqueta.innerHTML = nombre + " - " + edad + " - "+lenguajes[1];

var a = 7;
var b = 12

if(a = 7){
    let a = 4;
    var b = 1;
    console.log("Dentro del if -->" + a +" - " + b)
}

console.log("Fuera del if -->" + a +" - " + b)



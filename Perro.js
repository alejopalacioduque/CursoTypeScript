var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by alejandropalacio on 13/02/17.
 */
var Veterinaria;
(function (Veterinaria) {
    class Medico {
        constructor(nombreMedico) {
            this.nombreMedico = nombreMedico;
            alert(nombreMedico);
        }
    }
    Veterinaria.Medico = Medico;
})(Veterinaria || (Veterinaria = {}));
var ClinicaVeterinaria = Veterinaria.Medico;
let cargar_veterinaria = new ClinicaVeterinaria('Clinica');
function arranque(lanzar) {
    return function (target) {
        target.prototype.lanzamiento = function () {
            console.log(lanzar);
        };
    };
}
let Animal = class Animal {
    constructor(edad, peligroso) {
        this.edad = edad;
        this.peligroso = peligroso;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    getPeligroso() {
        return this.peligroso;
    }
    setPeligroso(peligroso) {
        this.peligroso = peligroso;
    }
};
Animal = __decorate([
    arranque('algo'),
    __metadata("design:paramtypes", [Number, Boolean])
], Animal);
var an = new Animal(12, false);
class Perro extends Animal {
    constructor(colorPelo = null) {
        super(9, false);
        if (colorPelo == null) {
            this.colorPelo = "Negro";
        }
        else {
            this.colorPelo = colorPelo;
        }
    }
    getColorPelo() {
        return this.colorPelo;
    }
    setColorPelo(value) {
        this.colorPelo = value;
    }
    enojar() {
        return this.furia++;
    }
    calma() {
        return this.furia--;
    }
    setfuria(fury) {
        this.furia = fury;
    }
    getFuria() {
        return this.furia;
    }
    getNombreDuenio() {
        return this.nombreDuenio;
    }
    setNombreDuenio(duenio) {
        this.nombreDuenio = duenio;
    }
    getNombrePerro() {
        return this.nombrePerro;
    }
    setNombrePerro(nombre) {
        this.nombrePerro = nombre;
    }
    getAllData() {
        return "Perro: " + " pelo:" + perro.getColorPelo() + " edad:" + perro.getEdad() +
            " peligroso: " + perro.getPeligroso() + " furia: " + this.getFuria() + " enojo: " +
            this.enojar() + " --> " + this.enojar();
    }
}
var perro = new Perro();
perro.setColorPelo("Rojo");
perro.setEdad(20);
perro.setPeligroso(false);
perro.setNombreDuenio("Saturnino");
perro.setNombrePerro("Kamiski");
perro.setfuria(10);
perro.enojar();
console.log(perro.getAllData());
var perros = [];
function guardar() {
    var nombre = document.getElementById("nombre").value.toString();
    var can = new Perro();
    can.setNombrePerro(nombre);
    perros.push(can);
    var list = "";
    for (var i = 0; i < perros.length; i++) {
        list = list + "<li>" + perros[i].getNombrePerro() + "</li>";
    }
    var listaPerros = document.getElementById("listado");
    listaPerros.innerHTML = list;
    document.getElementById("nombre").value = "";
}

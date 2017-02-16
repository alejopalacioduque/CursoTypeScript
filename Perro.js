/**
 * Created by alejandropalacio on 13/02/17.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function arranque(lanzar) {
    return function (target) {
        target.prototype.lanzamiento = function () {
            console.log(lanzar);
        };
    };
}
var Animal = (function () {
    function Animal(edad, peligroso) {
        this.edad = edad;
        this.peligroso = peligroso;
    }
    Animal.prototype.getEdad = function () {
        return this.edad;
    };
    Animal.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Animal.prototype.getPeligroso = function () {
        return this.peligroso;
    };
    Animal.prototype.setPeligroso = function (peligroso) {
        this.peligroso = peligroso;
    };
    return Animal;
}());
Animal = __decorate([
    arranque('algo'),
    __metadata("design:paramtypes", [Number, Boolean])
], Animal);
var an = new Animal(12, false);
var Perro = (function (_super) {
    __extends(Perro, _super);
    function Perro(colorPelo) {
        if (colorPelo === void 0) { colorPelo = null; }
        var _this = _super.call(this, 9, false) || this;
        if (colorPelo == null) {
            _this.colorPelo = "Negro";
        }
        else {
            _this.colorPelo = colorPelo;
        }
        return _this;
    }
    Perro.prototype.getColorPelo = function () {
        return this.colorPelo;
    };
    Perro.prototype.setColorPelo = function (value) {
        this.colorPelo = value;
    };
    Perro.prototype.enojar = function () {
        return this.furia++;
    };
    Perro.prototype.calma = function () {
        return this.furia--;
    };
    Perro.prototype.setfuria = function (fury) {
        this.furia = fury;
    };
    Perro.prototype.getFuria = function () {
        return this.furia;
    };
    Perro.prototype.getNombreDuenio = function () {
        return this.nombreDuenio;
    };
    Perro.prototype.setNombreDuenio = function (duenio) {
        this.nombreDuenio = duenio;
    };
    Perro.prototype.getNombrePerro = function () {
        return this.nombrePerro;
    };
    Perro.prototype.setNombrePerro = function (nombre) {
        this.nombrePerro = nombre;
    };
    Perro.prototype.getAllData = function () {
        return "Perro: " + " pelo:" + perro.getColorPelo() + " edad:" + perro.getEdad() +
            " peligroso: " + perro.getPeligroso() + " furia: " + this.getFuria() + " enojo: " +
            this.enojar() + " --> " + this.enojar();
    };
    return Perro;
}(Animal));
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

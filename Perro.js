/**
 * Created by alejandropalacio on 13/02/17.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var animal = (function () {
    function animal(edad, peligroso) {
        this.edad = edad;
        this.peligroso = peligroso;
    }
    animal.prototype.getEdad = function () {
        return this.edad;
    };
    animal.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    animal.prototype.getPeligroso = function () {
        return this.peligroso;
    };
    animal.prototype.setPeligroso = function (peligroso) {
        this.peligroso = peligroso;
    };
    return animal;
}());
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
    Perro.prototype.getAllData = function () {
        return "Perro: " + " pelo:" + perro.getColorPelo() + " edad:" + perro.getEdad() +
            " peligroso: " + perro.getPeligroso() + " furia: " + this.getFuria() + " enojo: " +
            this.enojar() + " --> " + this.enojar();
    };
    return Perro;
}(animal));
var perro = new Perro();
perro.setColorPelo("Rojo");
perro.setEdad(20);
perro.setPeligroso(false);
perro.setNombreDuenio("Saturnino");
perro.setfuria(10);
perro.enojar();
console.log(perro.getAllData());

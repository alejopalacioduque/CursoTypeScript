/**
 * Created by alejandropalacio on 13/02/17.
 */


function arranque(lanzar: string){
    return function(target : Function){
        target.prototype.lanzamiento = function(): void{
            console.log(lanzar);
        }
    }
}

@arranque('algo')
class Animal {
    public edad : number;
    public peligroso: boolean;

    constructor (edad : number, peligroso : boolean) {
        this.edad = edad;
        this.peligroso = peligroso;
    }
    public getEdad(): number{
        return this.edad;
    }

    public setEdad (edad : number) {
        this.edad = edad;
    }

    public getPeligroso(): boolean {
        return this.peligroso;
    }

    public setPeligroso(peligroso : boolean) {
        this.peligroso = peligroso;
    }
}

var an = new Animal(12, false);


interface animalDomestico {
    getNombreDuenio();
    setNombreDuenio(nombre : string);
}

class Perro extends  Animal implements  animalDomestico {
    private colorPelo : string;
    private furia : number;
    private nombreDuenio : string;
    private nombrePerro : string;

    constructor(colorPelo : any = null){
        super(9, false);
        if(colorPelo == null){
            this.colorPelo = "Negro";
        } else{
            this.colorPelo = colorPelo;
        }
    }

    public getColorPelo(): string {
        return this.colorPelo;
    }

    public setColorPelo(value: string) {
        this.colorPelo = value;
    }

    public enojar () : number {
        return this.furia ++;
    }

    public calma() : number{
        return this.furia --;
    }

    public setfuria(fury : number) {
        this.furia = fury;
    }

    private getFuria () : number {
        return this.furia;
    }

    public getNombreDuenio(): string {
        return this.nombreDuenio;
    }

    public  setNombreDuenio (duenio : string){
     this.nombreDuenio = duenio;
    }

    public getNombrePerro(): string {
        return this.nombrePerro;
    }

    public  setNombrePerro (nombre : string){
        this.nombrePerro = nombre;
    }

    public getAllData(){
        return "Perro: " +" pelo:" +perro.getColorPelo() + " edad:" + perro.getEdad() +
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

var perros : Array<Perro> = [];

function guardar(){
    var nombre : string = (<HTMLInputElement>document.getElementById("nombre")).value.toString();

    var can = new Perro();
    can.setNombrePerro(nombre);
    perros.push(can);

    var list = "";

    for (var i = 0; i< perros.length ; i++){
        list = list + "<li>" + perros[i].getNombrePerro()+"</li>";
    }

    var listaPerros = <HTMLElement> document.getElementById("listado");
    listaPerros.innerHTML = list;
    (<HTMLInputElement>document.getElementById("nombre")).value = "";
}
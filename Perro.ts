/**
 * Created by alejandropalacio on 13/02/17.
 */

class animal {
    private edad : number;
    private peligroso: boolean;

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

interface animalDomestico {
    getNombreDuenio();
    setNombreDuenio(nombre : string);
}

class Perro extends  animal implements  animalDomestico {
    private colorPelo : string;
    private furia : number;
    private nombreDuenio : string;

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
perro.setfuria(10);
perro.enojar();

console.log(perro.getAllData());
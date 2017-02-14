/**
 * Created by alejandropalacio on 13/02/17.
 */
class Perro{
    public colorPelo : string;
    public edad : number;
    public peligroso: boolean;

    constructor(colorPelo : any = null){

        this.edad = 9;
        this.peligroso = false;
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

    public getEdad(): number {
        return this.edad;
    }

    public setEdad(value: number) {
        this.edad = value;
    }

    public getPeligroso(): boolean {
        return this.peligroso;
    }

    public setPeligroso(value: boolean) {
        this.peligroso = value;
    }
}

var perro = new Perro();
perro.setColorPelo("Rojo");
perro.setEdad(20);

console.log("Perro: " +" pelo:" +perro.getColorPelo() + " edad:" + perro.getEdad() + " peligroso" + perro.getPeligroso());
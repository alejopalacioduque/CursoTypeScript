/**
 * Created by alejandropalacio on 15/02/17.
 */
interface Heroe {
    setluchar(lucha: boolean);
    getLuchar() : boolean;
    setCorrer(core : boolean);
    getCoorrer() : boolean;
    setSalvar(salva : boolean);
    getSalvar():boolean;
    setDisparar(dispara : boolean);
    getDisparar():boolean;
    getSaludInicial():number;
    setSaludInicial(salud : number);
    getEtica(): number;
    setEtica(etic : number);
    saludInicial : number;
    etica : number;
    formaCorrer : string;
    formaLuchar: string;
    luchar :boolean;
    correr: boolean;
    salvar:boolean;
    disparar:boolean;
    resolverConflicto(etica : number) : boolean;

}

interface HeroeVolador extends  Heroe {
    setVolar(vuela :boolean);
    getVolar():boolean;
    setAterrizar(aterriza:boolean);
    getAterrizar():boolean;
    volar:boolean;
    aterrizar:boolean;
}

interface HeroeEnLlamas extends  Heroe {
    setEncenderse(encender :boolean);
    getEncenderse():boolean;
    setApagarse(apagar:boolean);
    getApagarse():boolean;
    setLanzarFuego(lanzar : boolean);
    getLanzarFuego() : boolean;
    encendere:boolean;
    apagarse:boolean;
    lanzarFuego:boolean;
}

interface HeroeIntangible extends  Heroe {
    setVolverseTangible(tangible :boolean);
    getTangible():boolean;
    setIntangible(tangible:boolean);
    getIntangible():boolean;
    tangible:boolean;
    intangible:boolean;
}

class Batman implements Heroe {
    luchar: boolean;
    correr: boolean;
    salvar: boolean;
    disparar: boolean;

    formaCorrer: string;
    formaLuchar: string;
    saludInicial: number;
    etica: number;

    constructor (){
        this.saludInicial = 100;
        this.etica = 100;
        this.formaCorrer = "rengo";
        this.formaLuchar = "Bazofia";
    }

    resolverConflicto(etica: number): boolean {
        if(this.etica > 50) {
            return true;
        }
        return false;
    }

    setluchar(lucha: boolean) {
        this.luchar = lucha
    }

    getLuchar(): boolean {
        return this.luchar;
    }

    setCorrer(core: boolean) {
        this.correr = core
    }

    getCoorrer(): boolean {
        return this.correr;
    }

    setSalvar(salva: boolean) {
        this.salvar = salva;
    }

    getSalvar(): boolean {
        return this.salvar;
    }

    setDisparar(dispara: boolean) {
        this.disparar = dispara;
    }

    getDisparar(): boolean {
        return this.disparar;
    }

    getSaludInicial(): number {
        return this.saludInicial;
    }

    setSaludInicial(salud: number) {
        this.saludInicial = salud;
    }

    getEtica(): number {
        return this.etica;
    }

    setEtica(etic: number) {
        this.etica = etic;
    }

}

class BatMan  implements  Heroe {
    luchar: boolean;
    correr: boolean;
    salvar: boolean;
    disparar: boolean;
    formaCorrer: string;
    formaLuchar: string;
    saludInicial: number;
    etica: number;

    constructor (){
        this.saludInicial = 100;
        this.etica = 100;
        this.formaCorrer = "rengo";
        this.formaLuchar = "Bazofia";
    }

    resolverConflicto(etica: number): boolean {
        if(this.etica > 50) {
            return true;
        }
        return false;
    }

    setluchar(lucha: boolean) {
        this.luchar = lucha
    }

    getLuchar(): boolean {
        return this.luchar;
    }

    setCorrer(core: boolean) {
        this.correr = core
    }

    getCoorrer(): boolean {
        return this.correr;
    }

    setSalvar(salva: boolean) {
        this.salvar = salva;
    }

    getSalvar(): boolean {
        return this.salvar;
    }

    setDisparar(dispara: boolean) {
        this.disparar = dispara;
    }

    getDisparar(): boolean {
        return this.disparar;
    }

    getSaludInicial(): number {
        return this.saludInicial;
    }

    setSaludInicial(salud: number) {
        this.saludInicial = salud;
    }

    getEtica(): number {
        return this.etica;
    }

    setEtica(etic: number) {
        this.etica = etic;
    }

}

class SuperMan implements  HeroeVolador{
    volar: boolean;
    aterrizar: boolean;
    luchar: boolean;
    correr: boolean;
    salvar: boolean;
    disparar: boolean;
    formaCorrer: string;
    formaLuchar: string;
    saludInicial: number;
    etica: number;

    constructor (){
        this.saludInicial = 100;
        this.etica = 100;
        this.formaCorrer = "rengo";
        this.formaLuchar = "Bazofia";
    }

    resolverConflicto(etica: number): boolean {
        if(this.etica > 50) {
            return true;
        }
        return false;
    }

    setVolar(vuela: boolean) {
        this.volar = vuela;
    }

    getVolar(): boolean {
        return this.volar;
    }

    setAterrizar(aterriza: boolean) {
        this.aterrizar = aterriza;
    }

    getAterrizar(): boolean {
        return this.aterrizar;
    }

    setluchar(lucha: boolean) {
        this.luchar = lucha
    }

    getLuchar(): boolean {
        return this.luchar;
    }

    setCorrer(core: boolean) {
        this.correr = core
    }

    getCoorrer(): boolean {
        return this.correr;
    }

    setSalvar(salva: boolean) {
        this.salvar = salva;
    }

    getSalvar(): boolean {
        return this.salvar;
    }

    setDisparar(dispara: boolean) {
        this.disparar = dispara;
    }

    getDisparar(): boolean {
        return this.disparar;
    }

    getSaludInicial(): number {
        return this.saludInicial;
    }

    setSaludInicial(salud: number) {
        this.saludInicial = salud;
    }

    getEtica(): number {
        return this.etica;
    }

    setEtica(etic: number) {
        this.etica = etic;
    }

}

class IronMan implements Heroe{
    luchar: boolean;
    correr: boolean;
    salvar: boolean;
    disparar: boolean;
    formaCorrer: string;
    formaLuchar: string;
    saludInicial: number;
    etica: number;

    constructor (){
        this.saludInicial = 100;
        this.etica = 100;
        this.formaCorrer = "rengo";
        this.formaLuchar = "Bazofia";
    }

    resolverConflicto(etica: number): boolean {
        if(this.etica > 50) {
            return true;
        }
        return false;
    }

    setluchar(lucha: boolean) {
        this.luchar = lucha
    }

    getLuchar(): boolean {
        return this.luchar;
    }

    setCorrer(core: boolean) {
        this.correr = core
    }

    getCoorrer(): boolean {
        return this.correr;
    }

    setSalvar(salva: boolean) {
        this.salvar = salva;
    }

    getSalvar(): boolean {
        return this.salvar;
    }

    setDisparar(dispara: boolean) {
        this.disparar = dispara;
    }

    getDisparar(): boolean {
        return this.disparar;
    }

    getSaludInicial(): number {
        return this.saludInicial;
    }

    setSaludInicial(salud: number) {
        this.saludInicial = salud;
    }

    getEtica(): number {
        return this.etica;
    }

    setEtica(etic: number) {
        this.etica = etic;
    }

}

class AntorchaHumana implements  HeroeEnLlamas{
    encendere: boolean;
    apagarse: boolean;
    lanzarFuego: boolean;
    luchar: boolean;
    correr: boolean;
    salvar: boolean;
    disparar: boolean;
    formaCorrer: string;
    formaLuchar: string;
    saludInicial: number;
    etica: number;

    constructor (){
        this.saludInicial = 100;
        this.etica = 100;
        this.formaCorrer = "rengo";
        this.formaLuchar = "Bazofia";
    }

    resolverConflicto(etica: number): boolean {
        if(this.etica > 50) {
            return true;
        }
        return false;
    }

    setEncenderse(encender: boolean) {
        this.encendere = encender;
    }

    getEncenderse(): boolean {
        return this.encendere;
    }

    setApagarse(apagar: boolean) {
        this.apagarse = apagar;
    }

    getApagarse(): boolean {
        return this.apagarse;
    }

    setLanzarFuego(lanzar: boolean) {
        this.lanzarFuego = lanzar;
    }

    getLanzarFuego(): boolean {
        return this.lanzarFuego;
    }

    setluchar(lucha: boolean) {
        this.luchar = lucha
    }

    getLuchar(): boolean {
        return this.luchar;
    }

    setCorrer(core: boolean) {
        this.correr = core
    }

    getCoorrer(): boolean {
        return this.correr;
    }

    setSalvar(salva: boolean) {
        this.salvar = salva;
    }

    getSalvar(): boolean {
        return this.salvar;
    }

    setDisparar(dispara: boolean) {
        this.disparar = dispara;
    }

    getDisparar(): boolean {
        return this.disparar;
    }

    getSaludInicial(): number {
        return this.saludInicial;
    }

    setSaludInicial(salud: number) {
        this.saludInicial = salud;
    }

    getEtica(): number {
        return this.etica;
    }

    setEtica(etic: number) {
        this.etica = etic;
    }

}

class GataSombra implements  HeroeIntangible {
    tangible: boolean;
    intangible: boolean;
    luchar: boolean;
    correr: boolean;
    salvar: boolean;
    disparar: boolean;
    formaCorrer: string;
    formaLuchar: string;
    saludInicial: number;
    etica: number;

    constructor (){
        this.saludInicial = 100;
        this.etica = 100;
        this.formaCorrer = "rengo";
        this.formaLuchar = "Bazofia";
    }

    resolverConflicto(etica: number): boolean {
        if(this.etica > 50) {
            return true;
        }
        return false;
    }

    setVolverseTangible(tangible: boolean) {
        this.tangible = tangible;
    }

    getTangible(): boolean {
        return this.tangible;
    }

    setIntangible(tangible: boolean) {
        this.intangible = tangible;
    }

    getIntangible(): boolean {
        return this.intangible;
    }

    setluchar(lucha: boolean) {
        this.luchar = lucha
    }

    getLuchar(): boolean {
        return this.luchar;
    }

    setCorrer(core: boolean) {
        this.correr = core
    }

    getCoorrer(): boolean {
        return this.correr;
    }

    setSalvar(salva: boolean) {
        this.salvar = salva;
    }

    getSalvar(): boolean {
        return this.salvar;
    }

    setDisparar(dispara: boolean) {
        this.disparar = dispara;
    }

    getDisparar(): boolean {
        return this.disparar;
    }

    getSaludInicial(): number {
        return this.saludInicial;
    }

    setSaludInicial(salud: number) {
        this.saludInicial = salud;
    }

    getEtica(): number {
        return this.etica;
    }

    setEtica(etic: number) {
        this.etica = etic;
    }

}

class DeadPool implements  Heroe{
    saludInicial: number;
    etica: number;
    formaCorrer: string;
    formaLuchar: string;
    luchar: boolean;
    correr: boolean;
    salvar: boolean;
    disparar: boolean;

    constructor (){
        this.saludInicial = 40;
        this.etica = 100;
        this.formaCorrer = "rengo";
        this.formaLuchar = "Patan";
    }

    resolverConflicto(etica: number): boolean {
        if(this.etica > 50) {
            return true;
        }
        return false;
    }


    setluchar(lucha: boolean) {
        this.luchar = lucha
    }

    getLuchar(): boolean {
        return this.luchar;
    }

    setCorrer(core: boolean) {
        this.correr = core
    }

    getCoorrer(): boolean {
        return this.correr;
    }

    setSalvar(salva: boolean) {
        this.salvar = salva;
    }

    getSalvar(): boolean {
        var Digital=new Date();
        var hours=Digital.getHours();
        if(hours % 2 == 0) {
            return true;
        }
        return false;
    }

    setDisparar(dispara: boolean) {
        this.disparar = dispara;
    }

    getDisparar(): boolean {
        return this.disparar;
    }

    getSaludInicial(): number {
        return this.saludInicial;
    }

    setSaludInicial(salud: number) {
        // no se puede modificar
    }

    getEtica(): number {
        return this.etica;
    }

    setEtica(etic: number) {
        this.etica = etic;
    }

}

class profesorX implements  Heroe {
    saludInicial: number;
    etica: number;
    formaCorrer: string;
    formaLuchar: string;
    luchar: boolean;
    correr: boolean;
    salvar: boolean;
    disparar: boolean;

    constructor (){
        this.saludInicial = 10;
        this.etica = 100;
        this.formaCorrer = "Ninguna";
        this.formaLuchar = "Mental";
        this.correr = false;
    }

    resolverConflicto(etica: number): boolean {
        if(this.etica > 50) {
            return true;
        }
        return false;
    }

    setluchar(lucha: boolean) {
        this.luchar = lucha
    }

    getLuchar(): boolean {
        return this.luchar;
    }

    setCorrer(core: boolean) {
        // no corre
    }

    getCoorrer(): boolean {
        return this.correr;
    }

    setSalvar(salva: boolean) {
        this.salvar = salva;
    }

    getSalvar(): boolean {
        return this.salvar;
    }

    setDisparar(dispara: boolean) {
        this.disparar = dispara;
    }

    getDisparar(): boolean {
        return this.disparar;
    }

    getSaludInicial(): number {
        return this.saludInicial;
    }

    setSaludInicial(salud: number) {
        this.saludInicial = salud;
    }

    getEtica(): number {
        return this.etica;
    }

    setEtica(etic: number) {
        // no se puede modificar
    }

}
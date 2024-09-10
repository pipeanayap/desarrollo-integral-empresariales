"use strict";
let miVariable = "Hola mundo";
console.log(miVariable);
//Create an object
const Person1 = {
    firstName1: "Luis",
    secondName: "Felipe",
    age: 20
};
//Destructuring
let { firstName1, secondName } = Person1;
console.log(firstName1, ' ', secondName);
let miNombre = "Pipe";
let [a1, a2, a3, a4] = miNombre;
console.log(a1, a2, a3, a4);
const frutas = ["platanos", "naranjas", "manzanas", "mangos"];
let [fruta1, fruta2] = frutas;
console.log(fruta1, fruta2);
let [frutaA, , , frutaB] = frutas;
console.log(frutaA, frutaB);
class Personax {
    constructor(nombre, edadx, apellidoP, apellidoM) {
        this.nombrex = nombre;
        this.edadx = edadx;
        this.apellidoP = apellidoP;
        this.apellidoM = apellidoM;
    }
    getEdadx() {
        return this.edadx;
    }
    setEdad(edadx) {
        this.edadx = edadx;
    }
    getNombrex() {
        return this.nombrex;
    }
    setNombrex(nombrex) {
        this.nombrex = nombrex;
    }
    getApellidoP() {
        return this.apellidoP;
    }
    setApellidoP(apellidoP) {
        this.apellidoP = apellidoP;
    }
    getApellidoM() {
        return this.apellidoM;
    }
    setApellidoM(apellidoM) {
        this.apellidoM = apellidoM;
    }
    nombreCompleto() {
        return this.nombrex + " " + this.apellidoP + " " + this.apellidoM + " con la edad de " + this.edadx;
    }
}
let personaje1 = new Personax("Pipe", 20, 'Anaya', 'Parada');
console.log(personaje1.edadx);
console.log(personaje1.nombrex);
//  personaje1.nombrex = 'Hola';
personaje1.edadx = 25;
console.log(personaje1.edadx);
console.log(personaje1.nombrex);
let personaje2 = new Personax('Carlos', 35, 'Serrano', 'algo');
personaje2.setEdad(20);
personaje2.setNombrex('Juan carlos');
console.log('La nueva edad de carlos es de ', personaje2.getEdadx());
console.log('El nuevo nombre de carlos es ', personaje2.getNombrex());
console.log(personaje1.nombreCompleto());
class userAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const usuarioInterface = new userAccount('Imagine Dragons', 2);
console.log(usuarioInterface.name, usuarioInterface.id);

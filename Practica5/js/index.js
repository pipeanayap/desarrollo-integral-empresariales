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
    constructor(nombre, edadx) {
        this.nombrex = nombre;
        this.edadx = edadx;
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
}
let personaje1 = new Personax("Pipe", 20);
console.log(personaje1.edadx);
console.log(personaje1.nombrex);
personaje1.nombrex = 'Hola';
personaje1.edadx = 25;
console.log(personaje1.edadx);
console.log(personaje1.nombrex);
let personaje2 = new Personax('Carlos', 35);
personaje2.setEdad(20);
personaje2.setNombrex('Juan carlos');
console.log('La nueva edad de carlos es de ', personaje2.getEdadx());
console.log('El nuevo nombre de carlos es ', personaje2.getNombrex());

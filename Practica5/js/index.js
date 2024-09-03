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

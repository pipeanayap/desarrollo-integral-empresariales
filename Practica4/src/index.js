"use strict";
//Tuplas
let tupla = ["Lucas", 23];
console.log(tupla);
console.log(tupla[0]);
console.log(typeof tupla);
let ourTuple = ["Lucas", 23, true];
console.log('Nombre: ', ourTuple[0]);
console.log('Edad: ', ourTuple[1]);
//Ternario
let casado = ourTuple[2] ? "casado" : "soltero";
console.log('Estado civil: ', casado);
let ourTuple2 = [23, false, 'lucas'];
ourTuple2 = [25, true, 'Lucas'];
console.log(ourTuple2);
let ourReadonlyTuple = [5, true, 'Juan'];
/*  ourReadonlyTuple.push('cadena');
 ourReadonlyTuple[0] = 30; */
console.log(ourReadonlyTuple);
//DESESTRUCTURACION DE VARIABLES
const person = {
    firstName: "juan",
    lastName: "Anaya",
    age: 18
};
let nombreX = person.firstName;
let { firstName, lastName, age } = person;
console.log(firstName, lastName, age);
function fibonacciSeries(n) {
    let series = [0, 1];
    for (let i = 2; i < n; i++) {
        let nextNumber = series[i - 1] + series[i - 2];
        series.push(nextNumber);
    }
    return series;
}
let n = 25;
let fibonacci = fibonacciSeries(n);
console.log(fibonacci);

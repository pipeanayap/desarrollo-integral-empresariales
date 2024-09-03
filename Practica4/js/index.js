//Tuplas
var tupla = ["Lucas", 23];
console.log(tupla);
console.log(tupla[0]);
console.log(typeof tupla);
var ourTuple = ["Lucas", 23, true];
console.log('Nombre: ', ourTuple[0]);
console.log('Edad: ', ourTuple[1]);
//Ternario
var casado = ourTuple[2] ? "casado" : "soltero";
console.log('Estado civil: ', casado);
var ourTuple2 = [23, false, 'lucas'];
ourTuple2 = [25, true, 'Lucas'];
console.log(ourTuple2);
var ourReadonlyTuple = [5, true, 'Juan'];
/*  ourReadonlyTuple.push('cadena');
 ourReadonlyTuple[0] = 30; */
console.log(ourReadonlyTuple);
//DESESTRUCTURACION DE VARIABLES
var person = {
    firstName: "juan",
    lastName: "Anaya",
    age: 18
};
var nombreX = person.firstName;
var firstName = person.firstName, lastName = person.lastName, age = person.age;
console.log(firstName, lastName, age);
function fibonacciSeries(n) {
    var series = [0, 1];
    for (var i = 2; i < n; i++) {
        var nextNumber = series[i - 1] + series[i - 2];
        series.push(nextNumber);
    }
    return series;
}
var n = 25;
var fibonacci = fibonacciSeries(n);
console.log(fibonacci);

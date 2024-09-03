//Tuplas

let tupla:[string, number] = ["Lucas",23];

console.log(tupla);
console.log(tupla[0]);
console.log(typeof tupla);

let ourTuple: [string, number, boolean] = ["Lucas", 23, true];

console.log('Nombre: ', ourTuple[0]);
console.log('Edad: ', ourTuple[1]);

 //Ternario

 let casado: string = ourTuple[2] ? "casado" : "soltero";
 console.log('Estado civil: ', casado);

 let ourTuple2: [number, boolean, string] = [23, false, 'lucas'];
 ourTuple2  = [25,true,'Lucas'];
 console.log(ourTuple2);

 let ourReadonlyTuple: readonly[number, boolean, string] = [5, true, 'Juan']

/*  ourReadonlyTuple.push('cadena');
 ourReadonlyTuple[0] = 30; */
 console.log(ourReadonlyTuple);


 //DESESTRUCTURACION DE VARIABLES
 const person = {
    firstName : "juan",
    lastName : "Anaya",
    age : 18
 }

 let nombreX : string = person.firstName;

 let {firstName, lastName, age} = person;
 console.log(firstName, lastName, age);



 function fibonacciSeries (n:number): number[] {
   let series: number[] = [0,1];

   for (let i = 2; i < n; i ++){
      let nextNumber = series[i - 1] + series[ i - 2];
      series.push(nextNumber);
   }

   return series;
 }
let n : number = 25;

let fibonacci: number[] = fibonacciSeries(n);
console.log(fibonacci);


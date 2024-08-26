let normalx:any = 'hola'
normalx = 10;
normalx = true;


let usuario:any = 21
console.log(normalx);

let value: any;
console.log(value)
//Hola mundo 

value = true;
value = 10;
value = 'hola'
value = [];
value = {};
value = Math.random;
value = null;
value = undefined;
console.log(value);

let myValue:any;
console.log('Tipo desconocido cawn', myValue)

const edad:number = 18;
console.log("edad",edad);
console.log('edad: ',edad);

const sueldo:number = 1.234;
const total:number = Number('5678'); //CAST 

console.log(sueldo);
console.log(total);

const  personaje: string = "el chavo"
const  otroPersonaje: string = "Jirafales"
const otroMas:string = `Profesor jirafales y ${personaje}`;
console.log(otroMas);

const heroe:string = 'deadpool\'s house'
console.log(heroe);
console.log(heroe.toUpperCase());

let vengador: any;
vengador = 'Dr. strange';
console.log(vengador.charAt(0));

vengador = 150.55;

console.log(vengador.toFixed(1)) //el uno representa cuantos decimales queremos despues del punto
console.log((vengador as number).toFixed(1));
console.log(<number>vengador.toFixed(1));


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
//PARTE DEL RETO 
/*  Crear al menos 5 clases que van a usar en su proyecto, 3 propiedades, getters y setters y al menos un metodo por clase o
    funcion agregar un constructor
 */
//IGNORAR POR AHORA
class animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    mover(distancia = 0) {
        console.log(`${this.nombre} se ha movido ${distancia} metros`);
    }
    hacerSonido(sonido = 'sin sonido') {
        console.log(`${this.nombre} hace ${sonido}`);
    }
}
let animal1 = new animal('Grillo');
animal1.mover(5);
animal1.hacerSonido('cri cri cri');
class perro extends animal {
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
    }
    hacerSonido(sonido = 'Ladrido') {
        console.log(`${this.nombre} hace ${sonido}`);
    }
    mover(distancia = 0) {
        console.log(`${this.nombre} se ha movido ${distancia} metros`);
    }
}
let perro1 = new perro("Kira", 'Golden retriever');
perro1.hacerSonido('Guau guau');
perro1.mover(10);
class serpiente extends animal {
    constructor(nombre) {
        super(nombre);
    }
    mover(distancia = 1) {
        console.log('reptando');
        super.mover(distancia);
    }
    hacerSonido(sonido = 'siseo') {
        console.log(`${this.nombre} hace ${sonido}`);
    }
}
const serpiente1 = new serpiente('cobra');
serpiente1.mover(2);
serpiente1.hacerSonido();

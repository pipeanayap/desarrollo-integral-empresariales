function sum(a:number, b:number):number{
    return a + b;
}

let resultado = sum(5,6)
console.log(resultado);
const fsum = sum(5,80);
console.log(fsum);

//funciones de orden superior r


//Funciones arrow 

let sumArrow = (a:number, b:number):number =>  a + b;


//Funcion anonima

let funcionAnonima = function(){
    console.log("Soy una funcion anonima");
}

console.log(funcionAnonima());


//funcion anonima arrow

let funcionAnonimaArrow = () => console.log("Soy una funcion anonima arrow");

funcionAnonimaArrow()

function saludo(nombre:string):string{
    return `Hola ${nombre}`;
}

const saludoArrow = (nombre : string):string => "Hola " + nombre;

saludoArrow("greys");

function Advertencia():void { 
    console.log("Cuidado");
}

Advertencia();

//Never no retorna nada y no tiene fin 

function error(mensaje:string):never{

    let mensajeError : any = document.getElementById("mensajeError");

    mensajeError.innerHTML = "Error en la aplicacion"

    throw new Error(mensaje);
}

// error("Error en la aplicación")

type accion = 'suma'  | 'resta' | 'multiplicacion' | 'division';

/* const operation = (a: number, b: number, operacion: accion): number => operacion === 'suma' ? a + b : a - b; */

const operation = (a: number, b: number, operacion: accion): number => { 
    switch(operacion){
        case 'suma':
            return a + b;
        case 'resta':
            return a - b;
        case 'multiplicacion':
            return a * b;
        case 'division':
            return a / b;
        default:
            return 0;
    }
}

console.log(operation(5, 6, 'suma')); // 11
console.log(operation(5, 6, 'resta')); // -1



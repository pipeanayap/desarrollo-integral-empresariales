function sum(a, b) {
    return a + b;
}
var resultado = sum(5, 6);
console.log(resultado);
var fsum = sum(5, 80);
console.log(fsum);
//funciones de orden superior r
//Funciones arrow 
var sumArrow = function (a, b) { return a + b; };
//Funcion anonima
var funcionAnonima = function () {
    console.log("Soy una funcion anonima");
};
console.log(funcionAnonima());
//funcion anonima arrow
var funcionAnonimaArrow = function () { return console.log("Soy una funcion anonima arrow"); };
funcionAnonimaArrow();
function saludo(nombre) {
    return "Hola ".concat(nombre);
}
var saludoArrow = function (nombre) { return "Hola " + nombre; };
saludoArrow("greys");
function Advertencia() {
    console.log("Cuidado");
}
Advertencia();
//Never no retorna nada y no tiene fin 
function error(mensaje) {
    var mensajeError = document.getElementById("mensajeError");
    mensajeError.innerHTML = "Error en la aplicacion";
    throw new Error(mensaje);
}
/* const operation = (a: number, b: number, operacion: accion): number => operacion === 'suma' ? a + b : a - b; */
var operation = function (a, b, operacion) {
    switch (operacion) {
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
};
console.log(operation(5, 6, 'suma')); // 11
console.log(operation(5, 6, 'resta')); // -1

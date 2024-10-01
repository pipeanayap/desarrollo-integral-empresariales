console.log("Profe no se porque aqui no se ve pero si lo corro con node si funciona")

const {nombre, apellido, edad} = require('./datos')
const obtenerDatos = require('./obtenerDatos')

console.log(obtenerDatos('Juan', 'Perez', 30))


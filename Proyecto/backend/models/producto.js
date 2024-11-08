//MVC
const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const productosSchema = new Schema({
    nombre:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required: true
    }
})

const Producto = mongoose.model('Producto', productosSchema, 'productos');
module.exports = Producto;
const express = require('express');
const router = express.router();

const blogs = [
    {titulo: 'Articulo 1', autor:'Diego Guerrero', contenido:'lorem ipsum etc etc'},
    {titulo: 'Articulo 2', autor:'Sebastian Rojas', contenido:'lorem ipsum etc etc'},
    {titulo: 'Articulo 3', autor:'Cris Rojas', contenido:'lorem ipsum etc etc'},
    {titulo: 'Articulo 3', autor:'Carlos Rojas', contenido:'lorem ipsum etc etc'},
    {titulo: 'Articulo 3', autor:'Negro Rojas', contenido:'lorem ipsum etc etc'},
    {titulo: 'Articulo 3', autor:'Saul  Rojas', contenido:'lorem ipsum etc etc'},
    {titulo: 'Articulo 3', autor:'Diego Rojas', contenido:'lorem ipsum etc etc'},
    {titulo: 'Articulo 3', autor:'Diego Rojas', contenido:'lorem ipsum etc etc'}

]

router.get('/articulos', (_req,res) => {
    res.render('articulos', {title: 'Articulos', articulos: articulos});
});



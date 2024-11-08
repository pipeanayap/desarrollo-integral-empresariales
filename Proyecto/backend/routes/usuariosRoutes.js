const express = require('express');
const router = express.Router();
const Usuario = require('../models/producto');

router.get('/usuarios', async (req, res) => {
    Usuario.find()
        .then((usuarios) => {
            res.json(usuarios);
        })
        .catch((error) => {
            console.error("Error al obtener usuarios:", error); // Log de error
            res.status(400).send(error);        
        });
});


module.exports = router;


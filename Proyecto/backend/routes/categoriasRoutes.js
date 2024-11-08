const express = require('express');
const router = express.Router();
const Categoria = require('../models/categoria');

router.get('/categorias', async (req, res) => {
    Categoria.find()
        .then((categorias) => {
            res.json(categorias);;
        })
        .catch((error) => {
            res.status(400).send(err)
        });

});

module.exports = router;
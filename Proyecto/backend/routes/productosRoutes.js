const express = require('express');
const router = express.Router();
const Producto = require('../models/producto');

router.get('/productos', async (req, res) => {
    Producto.find()
        .then((productos) => {
            res.json(productos);
        })
        .catch((error) => {
            res.status(400).send(err)
        });

});

module.exports = router;
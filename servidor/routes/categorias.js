const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

// Obtiene todos los registros de las categorias en la BD
router.get('/',
    categoriaController.obtenerCategorias
);

module.exports = router;
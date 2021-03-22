const express = require('express');
const router = express.Router();
const operacionController = require('../controllers/operacionController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

// crea operaciones
// api/operaciones
router.post('/',
    auth,
    [
        check('concepto', 'El concepto de la operacion es obligatorio').not().isEmpty()
    ],
    operacionController.crearOperacion
)

// obtener todas las operaciones
router.get('/',
    auth,
    operacionController.obtenerOperaciones
)

// actualizar operacion via ID
router.put('/:id',
    auth,
    [
        check('concepto', 'El concepto de la operación es obligatorio').not().isEmpty()
    ],    
    operacionController.actualizarOperacion
);

// eliminar una operacion
router.delete('/:id',
    auth,
    operacionController.eliminarOperacion
)

module.exports = router;
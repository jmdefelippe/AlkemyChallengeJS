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
        check('concepto', 'El concepto de la operacion es obligatorio').not().isEmpty(),
        check('monto', 'El monto de la operacion es obligatorio').not().isEmpty(),
        check('fecha', 'La fecha de la operacion es obligatorio').not().isEmpty(),
        check('tipo', 'El tipo de operacion es obligatorio').not().isEmpty(),
        check('categoria', 'La categoria de la operacion es obligatorio').not().isEmpty()
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
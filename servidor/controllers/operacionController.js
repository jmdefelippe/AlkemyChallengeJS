const Operacion = require('../models/Operacion');
const { validationResult } = require('express-validator');

exports.crearOperacion = async (req, res) => {

    // revisar si hay errores
    const errores = validationResult(req);
    if ( !errores.isEmpty() ) {
        return res.status(400).json({errores: errores.array() })
    }

    try {
        // crear un nueva operacion
        const operacion = new Operacion({...req.body, usuario: req.usuario.id});

        // guardar el creador via JWT
        operacion.creador = req.usuario._id;

        // guardar el operacion
        await operacion.save();
        res.json(operacion);

        // res.json({msg : 'Operación Agregada Correctamente'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

// obtiene todos los operaciones del usuario actual
exports.obtenerOperaciones = async (req, res) => {
    try {
        const operaciones = await Operacion.find({ usuario: req.usuario.id }).sort({ fecha: -1 });
        res.json({ operaciones });            
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

// actualiza un operacion
exports.actualizarOperacion = async(req, res) => {
    // revisar si hay errores
    const errores = validationResult(req);
    if ( !errores.isEmpty() ) {
        return res.status(400).json({errores: errores.array() })
    }

    // extraer la información de la operacion
    const { concepto, monto, fecha, categoria } = req.body;
    const nuevaOperacion = {};

    if (concepto) {
        nuevaOperacion.concepto = concepto;
    }

    if (monto) {
        nuevaOperacion.monto = monto;
    }

    if (fecha) {
        nuevaOperacion.fecha = fecha;
    }

    if (categoria) {
        nuevaOperacion.categoria = categoria;
    }

    // agregar tantos if como campos haya

    try {
        
        // revisar el ID
        let operacion = await Operacion.findById(req.params.id);
        
        // si el operacion existe o no
        if (!operacion) {
            return res.status(404).json({ msg: 'Operacion no encontrada '})
        }

        // verificar el creador del operacion
        if (operacion.creador.toString() !== req.usuario.id) {
            return res.status(401).json({ msg: 'No autorizado '});
        }

        // actualizar
        operacion = await Operacion.findByIdAndUpdate({ _id: req.params.id }, { $set:
        nuevaOperacion }, { new: true });

        res.json({operacion});

    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }

}

// elimina un operacion por su id
exports.eliminarOperacion = async (req, res) => {
    try {
        // revisar el ID
        let operacion = await Operacion.findById(req.params.id);

        // si el operacion existe o no
        if (!operacion) {
            return res.status(404).json({ msg: 'Operacion no encontrada' })
        }

        // verificar el usuario que creó de la operacion
        if (operacion.usuario.toString() !== req.usuario.id) {
            return res.status(401).json({ msg: 'No autorizado' });
        }

        // eliminar el operacion
        await Operacion.findOneAndRemove({ _id : req.params.id });
        res.json({ msg: 'Operacion eliminada' })
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor')
    }
}
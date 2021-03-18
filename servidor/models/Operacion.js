const mongoose = require('mongoose');

const OperacionSchema = mongoose.Schema({
    concepto: {
        type: String,
        required: [true, 'Este valor es necesario!'],
        trim: true,
        maxLength: [100, '100 caracteres como máximo'],
        minLength: [1, '1 caracter como mínimo']
    },
    monto: {
        type: Number,
        required: [true, 'Este valor es necesario!']
    },
    fecha: {
        type: Date,
        default: Date.now()
    },
    tipo: {
        type: String,
        required: [true, 'Este valor es necesario!'],
        trim: true
    },
    categoria: {
        type: String,
        required: [true, 'Este valor es necesario!'],
        trim: true,
        maxLength: [100, '100 caracteres como máximo'],
        minLength: [1, '1 caracter como mínimo']
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    }
   
},
{
    autoCreate: true,
    collection: 'operaciones'
});

module.exports = mongoose.model('Operacion', OperacionSchema);
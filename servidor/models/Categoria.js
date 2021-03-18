const mongoose = require('mongoose');

const CategoriaSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: [true, 'Este valor es necesario!'],
            trim: true,
            maxLength: [50, '100 caracteres como máximo'],
            minLength: [1, '1 caracter como mínimo']
        }
    },
    {
        autoCreate: true,
        collection: 'categorias'
    }
);

module.exports = mongoose.model('Categoria', CategoriaSchema);
const Categoria = require('../models/Categoria');

/** Obtiene todas las categorias */
exports.obtenerCategorias = async (req, res, next) => {
    try {
        const categorias = await Categoria.find({});
        res.json(categorias);
    } catch (error) {
        console.log(error);
        next();
    }
}
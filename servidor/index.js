const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

const usuarios = require('./routes/usuarios');
const auth = require('./routes/auth');
const categorias = require('./routes/categorias');
const operaciones = require('./routes/operaciones');

// crear el servidor
const app = express();

// Conectar a la base de datos
conectarDB();

// Habilitar Cors
const opcionesCors = {
    origin: process.env.FRONTEND_URL
}
app.use( cors(opcionesCors) );

// Puerto de la app
const port = process.env.PORT || 4000;

// Habilitar leer los valores de un body
app.use( express.json() );


// Rutas de la app
app.use('/api/usuarios', usuarios);
app.use('/api/auth', auth);
app.use('/api/categorias', categorias );
app.use('/api/operaciones', operaciones );

// Arrancar la app
app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const connection = require('express-myconnection');

const app = express();

// IMPORTANDO RUTAS
const customerRoutes = require('./routes/customer');

// CONFIGURACIONES
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// MIDDLEWARE
app.use(morgan('dev'));
app.use(connection(mysql, {
    host: 'localhost',
    user: 'sebastian',
    password: '12345678',
    port: 3306,
    database: 'formulario'
}, 'single'));

// RUTAS
app.use('/', customerRoutes);

// ARCHIVOS ESTATICOS
app.use(express.static(path.join(__dirname, 'public')));


// INICIANDO EL SERVIDOR
app.listen(app.get('port'), () => {
    console.log('Servidor conectado en el puerto 3000')
});
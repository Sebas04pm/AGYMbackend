const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const connection = require('express-myconnection');

const app = express();

// IMPORTANDO RUTAS
const customerRoutes = require('./routes/customer');
const paginaRouter = require('./routes/pagina');
const servicioRouter = require('./routes/servicio');
const precioRouter = require('./routes/precio');

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
app.use(express.urlencoded({extended: false}))

// RUTAS
app.use('/', customerRoutes);
app.use('/pagina', paginaRouter);
app.use('/servicio', servicioRouter);
app.use('/precio', precioRouter);


// ARCHIVOS ESTATICOS
app.use(express.static(path.join(__dirname, 'public')));




// INICIANDO EL SERVIDOR
app.listen(app.get('port'), () => {
    console.log('Servidor conectado en el puerto 3000')
});



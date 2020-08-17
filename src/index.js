const express = require('express');
var app = express();
const path = require('path');
const ejs =require('ejs');
const mongoose = require('mongoose');
const morgan =require('morgan');


//settings
const port = process.env.port | 3000;
app.set('views', path.join(__dirname, 'views'));      //configurando la carpeta vista
app.set('view engine', 'ejs');                        //motor de plantilla

//middleware 
app.use(express.json());                            //para que el servidor entienda peticiones http
app.use(morgan('dev'));
require('./database/dbConect');

//router
app.use(require('./routers/index'));


//static file


//listenning server
app.listen(port, () => {
  console.log(`Servidor esta escuchando por ${port}`)
})
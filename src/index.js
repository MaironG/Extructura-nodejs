const express = require('express');
const path = require('path');
const ejs =require('ejs');
const mongoose = require('mongoose');
const morgan =require('morgan');
const bodyParser =require('body-parser') 
const passport = require('passport');
const session = require('express-session');

//Initalization
const app = express();
require('./database/dbConect');
require('./config/passport');


//settings
const port = process.env.port | 3000;
app.set('views', path.join(__dirname, 'views'));      //configurando la carpeta vista
app.set('view engine', 'ejs');                        //motor de plantilla

//middleware 
app.use(express.json());                            //para que el servidor entienda peticiones http
app.use(morgan('dev'));
require('./database/dbConect');
app.use(session({                                   //configuracion de express session
    secret: 'palabrasecreta',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());                       //configuracion para iniciar passport
app.use(passport.session());                            //para que passport utilize la session creada anteriormente



//router
app.use(require('./routers/miembros'));
app.use(require('./routers/usuarios'));


//static file


//listenning server
app.listen(port, () => {
  console.log(`Servidor esta escuchando por ${port}`)
})
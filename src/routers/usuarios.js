const express = require('express');
const router = express.Router();

//model
const usuario = require('../models/clientes.model');

router.get('/login', (req, res) => {                      //guardar usuario en la db
    console.log("nuevoUser");
    //await nuevoUser.save();
    res.send('Got a POST request');
    });

router.post('/login', (req, res) => {                      //guardar usuario en la db
    const {usuario, password, correo, confirPass} = req.body;
    console.log(req.body)
    if (password != confirPass) {
        res.send("contrasena no coinciden");
    } 
    if(password.length < 8 ){
        res.send("contrasena debe tener mas de 8 caracteres");
    }
    res.send("ok");
    });

module.exports =router;
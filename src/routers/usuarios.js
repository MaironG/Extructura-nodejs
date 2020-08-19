const express = require('express');
const router = express.Router();

//model
const user =require('../models/user.model');

const passport = require('passport');


router.get('/singin', (req, res) => {                      //
    console.log("nuevoUser");
    res.send('Usuario Logueado');
    });

router.post('/singin', passport.authenticate('local',{
        successRedirect: '/index',
        failureRedirect: 'login',
        failureFlash:true,
    }));
    

router.get('/login', (req, res) => {                      //guardar usuario en la db
    //console.log("nuevoUser");
    res.send('Got a POST request');
    });

router.post('/login', async (req, res) => {                      //guardar usuario en la db
    const {usuario, password, correo, confirPass} = req.body;
    //console.log(req.body)
    if (password=="" | usuario=="" | correo=="" | confirPass=="") {
        res.send("Todos los campos son obligatorio");
    }
    if (password != confirPass) {
        res.send("contrasena no coinciden");
    } 
    if(password.length < 8 ){
        res.send("contrasena debe tener mas de 8 caracteres");
    } else{
        const emailUser = await user.findOne({correo: correo});                  //validando si el correo existe
        if (emailUser) {
            res.send("Este Email ya esta en uso");
        }
        const newUsuario = new user({usuario, password, correo});                    //creando un nuevo usuario
        newUsuario.password = await newUsuario.encryptPassword(password);               //incriptando la password
        await newUsuario.save();                                                       //guardando el usuario
        res.send("usuario registrado");
    }
    
    });

module.exports =router;
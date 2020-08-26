const express = require('express');
const bodyParser = require('body-parser')
const { validate, ValidationError } = require('express-validation')
const mongoose = require('mongoose');




//model
const user =require('../models/miembros.model');
const { findById } = require('../models/miembros.model');
var ObjectId= require('mongoose').Types.ObjectId;




module.exports={


//Metodo para crear algun registro nuevo
create: async function  (req, res, next) {
 
    user.create({name: req.body.name, age: req.body.age, last_name: req.body.last_name}, function(err, userinfo){
        if (err) 
       next(err);
      else
       res.json({status: "success", message: "User added successfully!!!", data: null});
    })
},  

//Metodo para obtener todos los usuarios
getAll: async function (req, res, next) {
    
    const userAll = await user.find();
    return res.json(userAll);
},

//Metodo para odtener un usuario by id
getById: async function (req, res, next) {
  
    if (!ObjectId.isValid(req.params.id)) {             //validando el id
        return res.send("Id not valid");
    }

    await user.findById(req.params.id, function(err, userinfo){     //validando el id
        if (err) 
        next(err);
        console.log(req.body);
    if (userinfo==null) {
        return res.send("Do not have user with this Id");
    }
    else
        res.json({message:"encontrado", data: userinfo, status: "success"});
    })
},

//Metodo para actualizar un usuario
updateById: async function (req, res, next) {

    if (!ObjectId.isValid(req.params.id)) {             //validando el id
        return res.send("Id not valid");
    }

    if (req.body.name=="" | req.body.age=="" | req.body.last_name==null) {
        return res.send('All the field is necesary');
    }
    const {last_name, name, age, } = req.body;
    await  user.findByIdAndUpdate(req.params.id, {last_name, name, age});
    return res.json({status:"success", data: {user: req.body}});

},

//Metodo para eliminar un usuario 
deleteById: async function (req, res, next) {
       
    await user.findByIdAndRemove(req.params.id, function(err, userinfo){
        if (err) 
        next(err);
      else
        return res.json({message:"Deleted", status: "success"});
    })
},
 
}


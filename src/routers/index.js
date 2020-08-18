const express = require('express');
const router = express.Router();

//model
const user =require('../models/user.model');

router.get('/user', async (req, res) => {                     //consulta a la db
    const userAll = await user.find();
    console.log(userAll);
    res.json(userAll);
  });

  router.get('/user/:id', async (req, res) => {                     //consulta un usuario
    const userOne = await user.findOne({_id: req.params.id});
    console.log(userOne);
    res.json(userOne);
  });
  
router.post('/user', async (req, res) => {                      //guardar usuario en la db
    var  nuevoUser= new user({name: req.body.name, age: req.body.age, last_name: req.body.last_name});
    console.log(nuevoUser);
    await nuevoUser.save();
    res.send('Got a POST request');
    });
  
      
router.put('/user/:id', async (req, res) => {                     //aptualizar un usuario
    const {last_name, name, age} = req.body;
    var updateUser = await user.findByIdAndUpdate(req.params.id, {last_name, name, age});
    console.log(updateUser);
    res.json({updateUser});
    });
  
    
router.delete('/user/:id', async (req, res) => {
      var userDeleted = await user.findByIdAndDelete(req.params.id);
      console.log(userDeleted);
      res.send('Usuario Eliminado');
    });



module.exports =router;
const express = require('express');
const router = express.Router();

//model
const user =require('../models/miembros.model');

router.get('/user/miembros', async (req, res) => {                     //consulta a la db
    const userAll = await user.find();
    console.log(userAll);
    res.json(userAll);
  });

  router.get('/user/miembros/:id', async (req, res) => {                     //consulta un usuario
    const userOne = await user.findOne({_id: req.params.id});
    console.log(userOne);
    res.json(userOne);
  });
  
router.post('/user/miembros', async (req, res) => {                      //guardar usuario en la db
    var  nuevoUser= new user({name: req.body.name, age: req.body.age, last_name: req.body.last_name});
    console.log(nuevoUser);
    await nuevoUser.save();
    res.send('Miembro creado');
    });
  
      
router.put('/user/miembros/:id', async (req, res) => {                     //aptualizar un usuario
  const {last_name, name, age} = req.body;
  //if (req.params.id !=	req.body._id){
      res.send('Miembro no encontrado');
  //}else{
    
    var updateUser = await user.findByIdAndUpdate(req.params.id, {last_name, name, age});
    console.log(updateUser);
    res.send('Miembro actualizado');
 // }
    });
  
    
router.delete('/user/miembros/:id', async (req, res) => {
      if (req.params.id !=	req.body._id){
        res.send('Usuario no encontrado');
      } else{
        await user.findByIdAndDelete(req.params.id);
      res.send('Usuario Eliminado');
      }
    });



module.exports =router;
const express = require('express');
const router = express.Router();

//model
const User = require('../models/user.model');
const user = require('../models/user.model');

router.get('/user', (req, res) => {
    res.render('index');
  });
  
router.post('/user', (req, res) => {
      console.log(req.body);
      res.send('Got a POST request');
    });
  
      
router.put('/user', function (req, res) {
      res.send('Got a PUT request at /user');
    });
  
    
router.delete('/user', function (req, res) {
      res.send('Got a DELETE request at /user');
    });



module.exports =router;
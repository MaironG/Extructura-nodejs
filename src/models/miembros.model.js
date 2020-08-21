
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const miembroSchema = new Schema({                     //creando el esquema
    //_id:  {type: String},
    name: { type: String},                          //asingando las propiedades 
    age: { type: Number},
    last_name: { type: String},
    date: { type: Date, default: Date.now },
  });
  
module.exports= mongoose.model('miembro', miembroSchema);   //exportando el esquema y asignandole un nombre
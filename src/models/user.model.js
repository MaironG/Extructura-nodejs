
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({                     //creando el esquema
    name: { type: String},                          //asingando las propiedades 
    age: { type: Number},
    last_name: { type: String, match: /[a-z]/ },
    date: { type: Date, default: Date.now },
  });


module.exports= mongoose.model('user', userSchema);   //exportando el esquema y asignandole un nombre
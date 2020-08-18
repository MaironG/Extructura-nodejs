const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    usuario: { type: String},                          //asingando las propiedades 
    correo: { type: Number},
    password: { type: String}
});

module.exports= mongoose.model('usuario', clientSchema);
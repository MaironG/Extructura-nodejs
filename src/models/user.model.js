const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const clientSchema = new Schema({
    usuario: { type: String},                          //asingando las propiedades 
    correo: { type: String},
    password: { type: String}
});

clientSchema.methods.encryptPassword = async (password) =>{         //generar la contrasena cifrada
    const salt = await bcrypt.genSalt(10);                          //general un hash
    const hash = bcrypt.hash(password, salt);                       //cifrar la password
    return(hash);                                                   //retornar el hash
};

clientSchema.method.matchPassword = async function (password) {     //comprar la passwor con la del modelo de datos
    return await bcrypt.compare(password, this.password); 
};

module.exports= mongoose.model('usuario', clientSchema);
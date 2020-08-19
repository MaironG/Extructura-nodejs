//configuracion del passport


const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user.model');


passport.use( new LocalStrategy({                                                   //funcion para saber si el usuario esta logiado
    usernameField: 'email'
}, async (email, password, done)=>{                                                 //parametros    
    const user = await User.findOne({email: email});                                //confirmar si el usuario existe

    if (!user) {                                                                    
        return done(null, false, {message: 'Usuario no registrado'});
    }else{
        const match = await user.matchPassword(password);                           //confirmando si la contrasena esta correcta
        if (match) {
            return done(null, user);
        } else{
            return done(null, false, {message: 'Contrasena incorreta'});
        }
    }
}));


passport.serializeUser((user, done) => {                                //serializar al usuario y agregando un id de sesion
    done(null, user.id);
});

passport.deserializeUser((id, done) =>{                                 //deserializarlo para identificar si ya esta logiado
    User.findById(id, (err, user) =>{
        done(err, user);
    });
});
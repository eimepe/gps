var mongoose = require('mongoose');
var User = mongoose.model('User');
var service = require('./services');


function encriptar(user, pass) {
   var crypto = require('crypto')
   // usamos el metodo CreateHmac y le pasamos el parametro user y actualizamos el hash con la password
   var hmac = crypto.createHmac('sha1', user).update(pass).digest('hex')
   return hmac
}


exports.emailSignup = function(req) {
    var user = new User({
      nombre: req.body.nombre,
      email: req.body.email,
      estado: 1,
      password: encriptar(req.body.email, req.body.password),
      tel: req.body.tel,
      ciudad: req.body.ciudad
        // Creamos el usuario con los campos
        // que definamos en el Schema
        // nombre, email, etc...
    });

    user.save(function(err){
      if(!err){
        return {token: service.createToken(user)};
      }else{
        return err;
      }

    });
};

exports.emailLogin = function(req) {

 var passEncriptada = encriptar(req.body.email, req.body.password);

    User.findOne({email: req.body.email.toLowerCase()}, function(err, user) {

      if(user){
         //comprabamos si la contraseña encriptada es igual a la contraseña encriptada anteriormente
              if(user.password === passEncriptada)
                 return {token: service.createToken(user)};
              else
                 res.send('0')
           }
           else
              res.send('0')

        // Comprobar si hay errores
        // Si el usuario existe o no
        // Y si la contraseña es correcta

    });
};

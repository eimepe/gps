var jwt = require('jwt-simple');
var moment = require('moment');
var config = require('../js/config');

exports.isAuth = function(req, res, next) {
  console.log(req.params);
  if(req.params.token == "inicio") {
    return res
      .status(403)
      .send({message: "Tu petición no tiene cabecera de autorización"});
  }

  var token = req.params.token;
  var payload = jwt.decode(token, config.TOKEN_SECRET);

  if(payload.exp <= moment().unix()) {
     return res
         .status(401)
        .send({message: "El token ha expirado"});
  }

  req.user = payload.sub;
  next();
}

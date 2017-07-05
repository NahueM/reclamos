'use strict'

var jwt = require('jwt-simple');
var secret = 'asd123'

//con moment verificamos la caducidad del token
var moment = require('moment');

exports.createToken = function(user){
	var payload = {
		sub: user.usuario,
		tipo: user.tipo,
		rol: user.rol,
		//fecha de creacion del token
		iat: moment().unix(),
		//fecha de expiracion
		exp: moment().add(30, 'days').unix
	};

	//payload es el objeto del usuario q se va a identificar 
	return jwt.encode(payload, secret);
}
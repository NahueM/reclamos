'use strict'
var bcrypt = require('bcrypt-nodejs');
var User = require('../models/user');
var jwt = require('../services/jwt');


// UN CONTROLADOR ES EL INTERMEDIARIO ENTRE EL USUARIO Y LA BASE DE DATOS


// req es lo que recibe en la peticion y la response es lo que devuelve
function pruebas (req, res){
	res.status(200).send({
		message: 'Probando accion del controlador de usuarios'
	});
}

//funcion que crea y guarda un nuevo usuario
function guardarUser(req, res){
	 //creamos un objeto de tipo usuario
	 var user = new User();
	//y cargamos en la variable params todas las variables o datos que vengan en el body de la peticion http
	 var params = req.body;

	 //cargamos el objeto
	 user.tipo = params.tipo;
	 user.usuario = params.usuario;
	 user.rol = 'rol_agente';

	 if(params.passw){
	 	//encryptamos la contraseña
	 	bcrypt.hash(params.passw, null, null, function(err, hash){
	 		user.passw = hash;
	 		if(user.tipo != null && user.usuario != null && user.rol != null){
	 			//guarda el usuario
	 			user.save((err, userStored)=>{
	 				if(err){
	 					res.status(200).send({message: 'Introduce todos los campos'});
	 				}else{
	 					if(!userStored){
	 						res.status(404).send({message: 'no se ha registrado el usuario'});
	 					}else{
	 						// user: userStored en vez de devolver el objeto userStored lo devuelve como user es estetetico
	 						res.status(200).send({user: userStored});
	 					}
	 				}
	 			});
	 		}else{
	 			res.status(200).send({message: 'Introduce todos los campos'});
	 		}
	 	});
	 }else{
	 	res.status(200).send({message: 'Introduce la contraseña'});
	 }
}

function validar (req, res){

	var params = req.body;
	
	var usuario = params.usuario;
	var passw = params.passw;

	
		User.findOne({usuario: usuario.toLowerCase()}, (err, user) =>{
			if(err){
				res.status(500).send({message: 'Error en la peticion'});
			}else{
				if(!user){
					res.status(404).send({message: 'El usuario no existe'});
				}else{
					bcrypt.compare(passw, user.passw, function(err, check){
						if(check){
							//devolver los datos del usuario logueado
							if(params.gethash){
								//devolver token de jwt
								res.status(200).send({
									token: jwt.createToken(user)
								});

							}else{
								res.status(200).send({user});
							}
						}else{
							res.status(404).send({message: 'escribiste mal la contraseña'});
						}
					})
				}
			}
		});
	}


module.exports = {
	pruebas,
	guardarUser,
	validar
};
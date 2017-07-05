'use strict'

var express = require ('express');


//Cargamos el fichero user que se encuentra en el directorio controllers
var UserController = require('../controllers/user');

//cargamos el router de express en la variable api
var api = express.Router();


//cuando por get recibamos http://localhost:3977/api/probando-controlador se va a ejecutar la funcion 'pruebas' que esta en controllers/user
api.get('/probando-controlador', UserController.pruebas);
api.post('/nuevo-usuario', UserController.guardarUser);
api.post('/login', UserController.validar);

module.exports = api;
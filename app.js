'use strict'
// creamos las variables express y bodyParser y les cargamos las librerias
var express = require('express');
var bodyParser = require ('body-parser');

//creamos el objeto de express en la varible app

var app = express();

//rutas


//configuramos bodyParser
app.use(bodyParser.urlencoded({extended:false}));
//esto convierte a JSON los datos que nos lleguen por peticiones http
app.use(bodyParser.json());


// cabeceras http



//rutas base

app.get('/prueba', function(req, res){
	res.status(200).send({message: 'Ruta para verificar'})
})



//exportamos el modulo
module.exports = app;
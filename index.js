'use strict'
//Una vez que iniciamos un proyecto de una api lo primero que hacemos es hacer la conexion con la base dedatos

//requerimos la libreria mongoose para poder hacer la coneccion con la base de datos
var mongoose = require('mongoose');
var app = require ('./app');

//si no tenemos definido un puerto en las varibales de entorno entonces usamos el 3977 por defecto
var port= process.env.PORT || 3977;

//para evitar el mensaje de mongoose en la consola
mongoose.Promise = global.Promise;
//previamente creamos un elemento desde la consola de mongodb para crear la base
//hacemos la conexion mediante el puerto que viene por defecto 27017 y llamamos un func flecha como callback
//si hay algun problema nos tira el error y si no por consola nos informa que todo esta ok
mongoose.connect('mongodb://localhost:27017/api-reclamos', (err, res) =>{
	if(err){
		throw err;
	}else{
		console.log("La base de datos esta corriendo correctamente..");

		//ponemos el servidor a escuchar,app.listen(port, function() se le indica el puerto x el que va a escuchar
		//y una funcion de callback  
		app.listen(port, function(){
			console.log("Servidor del api-reclamos escuchando en http://localhost:"+port);
		})
	}
})
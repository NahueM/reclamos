'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//creamos el objeto
var TicketSchema = Schema({
	origen: String,
	fecha: Number,
	usuario: String,
	nreclamo: String,
	cliente: Number,
	});

//exportamos el modelo
//Ticket es el nombre de la identidad, entonces cuando usamos el TicketSchema va a guardar un ticket en 
//una coleccion de tikets. -- pluraliza la palabra 'Ticket' entonces se guarda un TicketSchema en Tickets
// lo que se guarda es una instancia de los objetos TicketSchema que vallamos creando
module.exports = mongoose.model('Ticket', TicketSchema);
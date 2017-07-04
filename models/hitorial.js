'use strict'

 var mongoose = require ('mongooose');
 var Schema = mongoose.Schema;


 //historial detallado d elos ticket que se vallan creando
 var HistorialSchema = Schema({
 	cliente:Number,
 	ultmod: Number,
 	hist : {
 		fecha: Number,
 		descr: String
 	},


 });

 module.exports = mongoose.model('Historial', HistorialSchema);

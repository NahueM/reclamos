'use strict'

var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

//agente de call, sucursal, o zonal
var UserSchema = Schema({
	tipo: String,
	usuario:String,
	rol:String,
	passw:String
});


module.exports = mongoose.model('User', UserSchema);
const { ObjectId } = require('bson')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const EsquemaUsuario = new Schema ({
	nombre: String, 
	apellidos: [String],
	rol: String,
	clases: [ObjectId] || null,
	usuario: String, 
	contrasena: String,
})

const m_usuarios = mongoose.model('usuarios', EsquemaUsuario)

module.exports = m_usuarios
const { ObjectId } = require('bson')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const EsquemaClase = new Schema ({
	nombre: String, 
	alumnos: [ObjectId], 
})

const m_clase = mongoose.model('clases', EsquemaClase)

module.exports = m_clase
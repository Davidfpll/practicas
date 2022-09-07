const { ObjectId } = require('bson')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const EsquemaAlumno = new Schema ({
	nombre: String, 
	apellidos: [String],
	clase: String,
	foto: String || null,
})

const m_alumnos = mongoose.model('alumnos', EsquemaAlumno)

module.exports = m_alumnos
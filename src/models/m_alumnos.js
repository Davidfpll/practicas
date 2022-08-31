const { ObjectId } = require('bson')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const EsquemaAlumno = new Schema ({
	nombre: String, 
	apellidos: [String],
	clase: ObjectId,
	foto: Buffer || null,
})

const m_alumnos = mongoose.model('alumnos', EsquemaAlumno)

module.exports = m_alumnos
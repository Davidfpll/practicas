const { ObjectId } = require('bson')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const EsquemaEntrevista = new Schema ({
	alumno: ObjectId,
	tutor: ObjectId,
	fecha: Date,
	titulo: String,
	nota: String || null,
})

const m_entrevista = mongoose.model('entrevistas', EsquemaEntrevista)

module.exports = m_entrevista
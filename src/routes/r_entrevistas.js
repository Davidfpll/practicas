const express = require('express')
const { get_entrevista, post_entrevista , delete_entrevista, put_entrevista } = require('../controllers/c_entrevistas')
const r_entrevistas = express.Router()

const { auth } = require('../middleware/auth')

r_entrevistas.post('/', auth, post_entrevista)
r_entrevistas.get('/', auth, get_entrevista)
r_entrevistas.delete('/:id', auth, delete_entrevista)
r_entrevistas.put('/:id', auth, put_entrevista)


module.exports = r_entrevistas
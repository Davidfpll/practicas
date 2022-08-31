const express = require('express')
const { get_alumnos, put_alumnos , delete_alumnos, post_alumnos } = require('../controllers/c_alumnos')
const r_alumnos = express.Router()

const { auth } = require('../middleware/auth')

r_alumnos.post('/', auth, post_alumnos)
r_alumnos.get('/', get_alumnos)
r_alumnos.get('/:id', get_alumnos)
r_alumnos.put('/:id', auth, put_alumnos)
r_alumnos.delete('/:id', auth, delete_alumnos)


module.exports = r_alumnos
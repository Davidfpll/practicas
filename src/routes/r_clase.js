const express = require('express')
const { get_clase, put_clase,post_clase, delete_clase } = require('../controllers/c_clase')
const r_clase = express.Router()

const { auth } = require('../middleware/auth')

r_clase.post('/', auth, post_clase)
r_clase.get('/', get_clase)
r_clase.get('/:id', get_clase)
r_clase.put('/:id', auth, put_clase)
r_clase.delete('/:id', auth, delete_clase)


module.exports = r_clase
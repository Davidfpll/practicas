const express = require('express')
const { get_usuario, put_usuario , delete_usuario, post_usuario } = require('../controllers/c_usuarios')
const r_usuarios = express.Router()

const { auth } = require('../middleware/auth')

r_usuarios.post('/', post_usuario)
r_usuarios.get('/', get_usuario) 
r_usuarios.get('/:id', get_usuario)
r_usuarios.put('/:id', auth, put_usuario)
r_usuarios.delete('/:id', auth, delete_usuario)


module.exports = r_usuarios
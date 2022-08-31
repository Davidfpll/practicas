const express = require('express')
const { crearLogin } = require('../controllers/c_login')
const r_login = express.Router()



r_login.post('/', crearLogin)

module.exports = r_login
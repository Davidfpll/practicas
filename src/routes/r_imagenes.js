const express = require('express')
const fs = require('fs-extra')
const multer = require('multer')
const { crearImagen, deletearchivo, enviarImagen }= require('../controllers/c_imagenes.js')
const r_imagenes = express.Router()

const storage = multer.diskStorage({
	
    destination: (req, file, cb) => {
		console.log(process.cwd())
        cb(null, 'archivos/')
    },
    filename:  (req, file, cb)=> {
        cb(null, req.params._id+ '.' + file.originalname.split('.')[1])
    }
})

const upload = multer({ storage: storage })



r_imagenes.post('/:_id', upload.single('archivo'), crearImagen)
r_imagenes.get('/:_id', enviarImagen)
r_imagenes.delete('/:archivo', deletearchivo)

module.exports = r_imagenes
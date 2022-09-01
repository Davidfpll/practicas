const express = require('express')
const cors = require('cors');
require('dotenv').config()

const db = require('./database')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.use('/usuario', require('./src/routes/r_usuarios'))
app.use('/alumnos', require('./src/routes/r_alumnos'))
app.use('/clase', require('./src/routes/r_clase'))
app.use('/login', require('./src/routes/r_login'))
app.use('/entrevistas', require('./src/routes/r_entrevistas'))
app.use('/imagenes', require('./src/routes/r_imagenes'))


db.on('connected', ()=>{
    console.log('Base de datos conectada correctamente')
})


app.get('/', (req, res)=>{
    res.send('Estas en la raiz')
})
const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=>{
    console.log(`El servidor está escuchando en puerto ${PORT}`)
})
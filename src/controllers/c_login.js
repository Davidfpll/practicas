const jwt = require('jsonwebtoken');
const { Palabrasecreta } = require('../middleware/auth');
const m_usuarios = require("../models/m_usuarios");
const bcrypt = require('bcrypt');

const crearLogin = async (req, res)=>{
    const {
        usuario,
        contrasena,
    } = req.body;
    
    const usuarios = await m_usuarios.findOne({usuario});

	if ( !usuarios ) return res.status(404).json({
		error: "Usuario no encontrado",
	})
    
    const token = jwt.sign({
        data: {
            _id: usuarios._id,
            nombre: usuarios.nombre,
			usuario: usuarios.usuario,
			contrasena: usuarios.contrasena,
			rol: usuarios.rol,
			apellidos: usuarios.apellidos,
			clases: usuarios.clases
        }
    }, Palabrasecreta);

	const contrasenacorrecta = await bcrypt.compare(contrasena, usuarios.contrasena)
    

    if ( contrasenacorrecta === false ) return res.status(403).json({
		error: "Contraseña incorrecta",
	})
    
    //const insertarToken = await m_usuarios.updateOne({usuario, contrasena},{token: token});

	return res.send({ 
		_id: usuarios._id,
		nombre: usuarios.nombre,
		usuario: usuarios.usuario,
		contrasena: usuarios.contrasena,
		token: token,
		rol: usuarios.rol,
		apellidos: usuarios.apellidos,
		clases: usuarios.clases
	})

}


module.exports = {
    crearLogin : crearLogin
}
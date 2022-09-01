const { ObjectId } = require("mongodb");
const m_usuarios = require("../models/m_usuarios")
const bcrypt = require('bcrypt');

const get_usuario = async (req, res)=>{

	const busqueda = {};
	
	const {id} = req.params
	if ( id ) busqueda._id = ObjectId(id);

	const usuarios = await m_usuarios.find(busqueda);

	return res.send(usuarios)
}

const put_usuario = async (req, res)=>{

	const Id = req.params.id

    const {
        nombre,
		apellidos, 
        usuarios,
		clases,
		foto,
    } = req.body;

	const buscar = { _id: ObjectId(Id) };
	const cambiar = { nombre, usuarios, apellidos, clases, foto };
	const opciones = { new: true };
	const usuario = await m_usuarios.findOneAndUpdate(buscar, cambiar, opciones);


	return res.send({ ok: true, usuario})

}

const delete_usuario = async (req, res)=>{

	const _id = req.params.id

	const usuario = await m_usuarios.deleteOne({ _id: ObjectId(_id) });

	return res.send({ ok: true, usuarioBorado: usuario })
}

const post_usuario = async (req, res)=>{
	try {
		const saltRounds = 10;
		
		const {
			nombre,
			apellidos, 
			usuario,
			rol,
			clases = null, 
			foto = null,
			contrasena
		} = req.body;

		const contrasenaencriptada = await bcrypt.hash(contrasena, saltRounds)
		const usuarioCreado = await new m_usuarios({
			nombre,
			apellidos,
			clases,
			rol,
			usuario,
			foto,
			contrasena: contrasenaencriptada
		}).save();

		return res.status(200).send({ ok: true, usuario: usuarioCreado });

	} catch ( error ){
		
		return res.status(400).send({ ok: false, error: error })
	}
}


module.exports = {
	post_usuario,
    get_usuario,
    put_usuario,
	delete_usuario,
}
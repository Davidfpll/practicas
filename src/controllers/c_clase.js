const { ObjectId } = require("mongodb");
const m_clase = require("../models/m_clase")


const get_clase = async (req, res)=>{

	const busqueda = {};
	
	const {id} = req.params
	if ( id ) busqueda._id = ObjectId(id);

	const clase = await m_clase.find(busqueda);

	return res.send(clase)
}

const delete_clase = async (req, res)=>{

	const _id = req.params.id

	const clase = await m_clase.deleteOne({ _id: ObjectId(_id) });

	return res.send({ ok: true, claseBorado: clase })
}

const post_clase = async (req, res)=>{

	const Id = req.params.id

    const {
		nombre, 
		alumnos,
    } = req.body;

	const cambiar = { alumnos, nombre };
	const clase = await m_clase(cambiar).save();

	return res.send({ ok: true, clase})

}
const put_clase = async (req, res)=>{

	const Id = req.params.id

    const {
		nombre, 
		alumnos,
    } = req.body;

	const buscar = { _id: ObjectId(Id) };
	const cambiar = { alumnos, nombre };
	const opciones = { new: true };
	const clase = await m_clase.findOneAndUpdate(buscar, cambiar, opciones);

	return res.send({ ok: true, clase})

}

module.exports = {
	post_clase,
    get_clase,
    put_clase,
	delete_clase,
}
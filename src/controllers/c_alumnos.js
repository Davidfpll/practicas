const { ObjectId } = require("mongodb");
const m_alumnos = require("../models/m_alumnos")

const get_alumnos = async (req, res)=>{

	const busqueda = {};
	
	const {id} = req.params
	if ( id ) busqueda._id = ObjectId(id);

	const alumnos = await m_alumnos.find(busqueda);

	return res.send(alumnos)
}

const put_alumnos = async (req, res)=>{

	const Id = req.params.id

    const {
        nombre,
		apellidos, 
		clase, 
        foto,
    } = req.body;

	const buscar = { _id: ObjectId(Id) };
	const cambiar = { nombre, apellidos, clase, foto };
	const opciones = { new: true };
	const alumno = await m_alumnos.findOneAndUpdate(buscar, cambiar, opciones);

	return res.send({ ok: true, alumno})

}

const delete_alumnos = async (req, res)=>{

	const _id = req.params.id

	const alumno = await m_alumnos.deleteOne({ _id: ObjectId(_id) });

	return res.send({ ok: true, alumnoBorado: alumno })
}

const post_alumnos = async (req, res)=>{
	try {
		const alumno = await new m_alumnos({...req.body}).save();
		return res.status(200).send({ ok: true, alumno });

	} catch ( error ){
		return res.status(400).send({ ok: false, error: error})
	}}

module.exports = {
	post_alumnos,
    get_alumnos,
    put_alumnos,
	delete_alumnos,
}
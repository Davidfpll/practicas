const { ObjectId } = require("mongodb");
const m_entrevistas = require("../models/m_entrevistas")



const get_entrevista = async (req, res)=>{

	const busqueda = {};
	
	const {id} = req.params
	if ( id ) busqueda._id = ObjectId(id);

	const clase = await m_entrevistas.find(busqueda);

	return res.send(clase)
}
const delete_entrevista = async (req, res)=>{

	const _id = req.params.id

	const entrevistas = await m_entrevistas.deleteOne({ _id: ObjectId(_id) });

	return res.send({ ok: true, entrevistasBorado: entrevistas })
}

const post_entrevista= async (req, res)=>{

    const {
		tutor, 
		alumno,
		fecha, 
		nota = null,
		titulo
    } = req.body;

	const entrevista = await m_entrevistas({
		tutor, 
		alumno, 
		fecha, 
		nota,
		titulo
	}).save();

	return res.send({ ok: true, entrevista})

}
const put_entrevista = async (req, res)=>{

	const Id = req.params.id

    const {
		tutor, 
		alumnos,
		fecha, 
		nota,
		titulo
    } = req.body;

	const buscar = { _id: ObjectId(Id) };
	const cambiar = {
		tutor, 
		alumnos,
		fecha, 
		nota,
		titulo
	};
	const opciones = { new: true };
	const entrevistas = await m_entrevistas.findOneAndUpdate(buscar, cambiar, opciones);

	return res.send({ ok: true, entrevistas})

}

module.exports = {
    get_entrevista,
    post_entrevista,
	delete_entrevista,
	put_entrevista
}
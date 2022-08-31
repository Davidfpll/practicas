
const alumnos = [
	{
		_id: 1,
		nombre: "Pepe",
		apellidos: ["Lopez", "De las Flores", "Castillo"],
		clase: 1,
		foto: Buffer()
	}
]

const clases = [
	{
		_id: 1,
		nombre: "daw1",
		alumnos: [1,2,3,4]
	}
]

const entrevistas = [
	{
		_id: 1,
		fecha: new Date(), // fecha de ahora
		trimestre: 1, // 1, 2 o 3
		alumno: 1,
		anotaciones: "Entrevista"
	}
]

const usuario = [
	{
		_id: 1,
		nombre: "David",
		apellidos: ["Olmo", "Franco"],
		rol: "tutor", // posisbles: [tutor, secretaria, admin]
		clases: [1,2], // null en caso de !tutor
		usuario: "dolmo",
		contrasena: "aaaaaa"
	}
]
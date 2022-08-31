const jwt = require("jsonwebtoken")

const Palabrasecreta = 'David Olmo';

const auth = (req, res, next)=>{

	if ( !req.headers.authorization ) return res.status(400)

	
	const token = req.headers.authorization.split(' ')[1]
	console.log('Estamos en Auth')

	try {
		const tokenVerificado = jwt.verify(token, Palabrasecreta);

		req.usuario = tokenVerificado;
		//if ( tokenVerificado.data.ro.find( (rol) => { return rol == 'Administrador'}) ) {
		//	req.administrador = true;
		//}

		next()
	} catch(error){
		console.log("error:",error)
		return res.status(400)
	}

}

module.exports = {
	auth,
	Palabrasecreta
}
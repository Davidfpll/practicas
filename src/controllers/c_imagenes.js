const fs = require('fs-extra')

module.exports = {
    crearImagen : (req, res)=>{
        return res.json({
            mensaje: "ok, estas en imagenes",
            nombre: req.params._id+ '.' + req.file.originalname.split('.')[1]
        })
    },
	enviarImagen: async (req,res)=>{
        try {
            const file = await fs.readFile('archivos/'+req.params._id+'.jpg');
            return res.send(file)
        } catch (error){
            return res.status(404).send(null)
        }
	},	
	deletearchivo : async (req, res)=>{
        try {
            const file = req.params.archivo
            const x = await fs.remove('archivos/'+file+'.jpg') 
            return res.json({eliminado: !x})
        } catch (error){
            return res.status(404).send({eliminado: false})
        }
    },
}

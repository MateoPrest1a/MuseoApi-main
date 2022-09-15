import conexion from "../DB/DB.js";

export const VisitanteRegister = async(req, res) =>{
    try {
        /************************************************************/
        let IdUsuario= null;
        let IdGuia;
        const [response] = await conexion.query("SELECT  `idUsuario` FROM `usuario` WHERE `dni`=(?)",
        {
            replacements: [req.body.dni],
        })
        IdUsuario = response[0].idUsuario;
            if(IdUsuario == null){
                await conexion.query("INSERT INTO `usuario`(`dni`, `nombre`, `apellido`) VALUES (?,?,?)",
                {
                    replacements: [req.body.dni, req.body.nombre, req.body.apellido],
                })
                .then(function (idUsuario)
                    {
                        IdUsuario = idUsuario[0];
                    }
                );
                await conexion.query("INSERT INTO `visitante`(`idUsuario`, `mail`, `cantPersonas`) VALUES (?,?,?)",
                {
                    replacements: [IdUsuario, req.body.mail, req.body.cantPersonas],
                })
            } else {
                await conexion.query("INSERT INTO `visitante`(`idUsuario`, `mail`, `cantPersonas`) VALUES (?,?,?)",
                {
                    replacements: [IdUsuario, req.body.mail, req.body.cantPersonas],
                })
            }
        /************************************************************/
        res.status(201).json({msg: "+"});
    } catch (error) {
        console.log(error.message);
    }
}
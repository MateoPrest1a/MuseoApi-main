import conexion from "../DB/DB";

export const GuiaRegister = async(req, res) =>{
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
                await conexion.query("INSERT INTO `guia`(`idUsuario`) VALUES (?)",
                {
                    replacements: [IdUsuario],
                })
                .then(function (idGuia)
                    {
                        IdGuia = idGuia[0];
                    }
                );
            } else {
                await conexion.query("INSERT INTO `guia`(`idUsuario`) VALUES (?)",
                {
                    replacements: [IdUsuario],
                })
                .then(function (idGuia)
                    {
                        IdGuia = idGuia[0];
                    }
                );
            }
        /************************************************************/
        let IdIdioma = req.body.IdIdioma;
        await conexion.query("INSERT INTO `idiomaguia`(`idIdioma`, `idGuia`) VALUES (?,?)",
        {
            replacements: [IdIdioma, IdGuia],
        })
        res.status(201).json({msg: "+"});
    } catch (error) {
        console.log(error.message);
    }
}

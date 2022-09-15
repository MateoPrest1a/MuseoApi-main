import conexion from "../DB/DB.js";

export const InscripcionCreate = async(req, res) =>{
    try {
        /************************************************************/
        await conexion.query("INSERT INTO `inscripcion`(`idInscriptor`, `idVisitante`, `idVisitaGuiada`, `fecha`) VALUES (?, ?, ?, ?)",
        {
            replacements: [req.body.idInscriptor, req.body.idVisitante, req.body.idVisitaGuiada, req.body.fecha],
        });
        res.status(201).json({msg:"Inscripcion Registrado"});
        /************************************************************/
    } catch (error) {
        console.log(error.message);
    }
}


export const InscripcionView = async(req, res) =>{
    try {
        let IdUsuario;
        await conexion.query("SELECT `idUsuario` FROM  `usuario` WHERE `dni`=(?)",
        {
            replacements: [req.body.dni],
        })
        .then( function (idUsuario){
            IdUsuario = idUsuario[0];
        }        
        );
        /************************************************************/
        let IdVisitante;
        await conexion.query("SELECT `idVisitante` FROM  `visitante` WHERE `idUsuario`=(?)",
        {
            replacements: [IdUsuario],
        })
        .then( function (idVisitante){
            IdVisitante = idVisitante[0];
        }        
        );
        /************************************************************/
        let IdVisitaGuiada;
        await conexion.query("SELECT `idVisitaGuiada` FROM  `inscripcion` WHERE `idVisitante`=(?)",
        {
            replacements: [IdVisitante],
        }
        )
        .then( function (idVisitaGuiada){
            IdVisitaGuiada = idVisitaGuiada[0];
        }
        )
        const [response] = await conexion.query("SELECT `fecha`, 'hora' FROM  `visitaguiada` WHERE `idVisitaGuiada`=(?)",
        {
            replacements: [IdVisitaGuiada],
        }
        );
        res.status(201).json(response);
        /************************************************************/
    } catch (error) {
        console.log(error.message);
    }
}
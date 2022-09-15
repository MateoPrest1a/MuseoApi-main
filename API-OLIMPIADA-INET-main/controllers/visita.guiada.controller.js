import conexion from "../DB/DB.js";

export const VisitaGuiadaRegister = async(req, res) =>{
    try {
        /************************************************************/
        let IdGuia;
        await conexion.query("SELECT `idGuia` FROM `guia` WHERE `idGuia`=(?)",
        {
            replacements: [req.body.idGuia],
        })
        .then( function (idGuia)
        {
            IdGuia = idGuia[0];
        }
        );
        /************************************************************/
        let IdRecorrido;
        await conexion.query("SELECT `idRecorrido` FROM `recorrido` WHERE `idRecorrido`=(?)",
        {
            replacements: [req.body.idRecorrido],
        })
        .then( function (idRecorrido)
        {
            IdRecorrido = idRecorrido[0];
        }
        );
        /************************************************************/
        await conexion.query("INSERT `visitaguiada`(`fecha`, `hora`, `idRecorrido`, `idGuia`) VALUES (?)",
        {
            replacements: [req.body.fecha, req.body.hora, IdRecorrido , IdGuia],
        });
        res.status(201).json({msg:"Idioma Registrado"});
        /************************************************************/
    } catch (error) {
        console.log(error.message);
    }
}

export const VisitaGuiadaView = async(req, res) =>{
    try {
        /************************************************************/
        const [response]= await conexion.query("SELECT `fecha`, `hora` FROM  `visitaguiada` ")
        res.status(201).json(response);
        /************************************************************/
    } catch (error) {
        console.log(error.message);
    }
}
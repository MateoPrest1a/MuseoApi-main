import conexion from "../DB/DB.js";

export const registrarExposicion = async(req,res)=>{
    try {
        await conexion.query("INSERT INTO `exposicion`( `idHabitacion`, `titulo`, `descripcion`) VALUES (?,?,?)",{
            replacements:[ req.body.idHabitacion, req.body.titulo, req.body.descripcion ],
        });
        res.status(201).json({msg:"+"});
    } catch (error) {
        console.log(error.message);
    }
}

export const editarExposicion = async(req, res) =>{
    try {
        let IdExposcion=req.params.idExposcion;
        await conexion.query("UPDATE `exposicion` SET `idHabitacion`=(?),`titulo`=(?),`descripcion`=(?) WHERE `idExposcion`=(?)",{  
            replacements: [[req.body.idHabitacion], [req.body.titulo], [req.body.descripcion], [IdExposcion]],
        });
        await conexion.query("INSERT INTO `modificareliminar`( `idAdministrador`, `idExposicion`) VALUES (?,?)",{
            replacements:[req.body.idAdministrador, IdExposcion],
        });
        res.status(200).json({msg: "Museo Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const listarExposicion = async(req,res)=>{
    try {
        const [response]= await conexion.query("SELECT  `idHabitacion`, `titulo`, `descripcion` FROM `exposicion` ");
        res.status(200).json(response);
        console.log(JSON.stringify(response, null,1))
    } catch (error) {
        console.log(error.message);
    }
}
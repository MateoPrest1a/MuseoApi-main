import conexion from "../DB/DB.js";

export const registrarHabitacion = async(req,res)=>{
    try {
        var idInstitucioin=0;
        const [response] = await conexion.query("SELECT `idInstitucion` FROM `institucion` WHERE 1");

        idInstitucioin= response[0].idInstitucion;

        await conexion.query("INSERT INTO `habitacion`( `idInstitucion`, `identificador`) VALUES (?,?)",{
            replacements:[idInstitucioin, req.body.identificador],
        });
        res.status(201).json({msg:"+"});
    } catch (error) {
        console.log(error.message);
    }
}

export const editarHabitacion = async(req, res) =>{
    try {
        await conexion.query("UPDATE `habitacion` SET `identificador`=(?) WHERE `idHabitacion`=(?)",{  
            replacements: [[req.body.identificador],[req.params.idHabitacion]],
        });
        res.status(200).json({msg: "Museo Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const cambiarEstado = async(req, res) =>{
    try{
    var id = req.params.idHabitacion;
    let estado = 0;
    //
    /************************************************************/
        try  {
            
            const [response] = await conexion.query("SELECT  `estado` FROM `habitacion` WHERE `idHabitacion`=(?)",
            {
                replacements: [id],
            });
            estado = response[0].estado;
            if(estado == 0){
                estado = 1;
            } else {
                estado = 0;
            }
        } catch (error) {
            console.log(error.message);
        }
        /************************************************************/
    
    await conexion.query("UPDATE `habitacion` SET `estado`=(?) WHERE `idHabitacion`=(?) ",
    {
        replacements: [[estado], [id]],
    });
    res.status(200).json({msg: "State Updated"});
    
    }
    catch (error) {
    console.log(error.message);
    }
}

export const listarHabitacion = async(req,res)=>{
    try {
        const [response]= await conexion.query("SELECT  `idInstitucion`, `identificador` FROM `habitacion`  ");
        res.status(200).json(response);
        console.log(JSON.stringify(response, null,1))
    } catch (error) {
        console.log(error.message);
    }
}
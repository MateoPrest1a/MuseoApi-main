import conexion from "../DB/DB.js";

export const IdiomaRegister = async(req, res) =>{
    try {
        /************************************************************/
        await conexion.query("INSERT INTO `idioma`(`idioma`) VALUES (?)",
        {
            replacements: [req.body.idioma],
        });
        res.status(201).json({msg:"Idioma Registrado"});
        /************************************************************/
    } catch (error) {
        console.log(error.message);
    }
}
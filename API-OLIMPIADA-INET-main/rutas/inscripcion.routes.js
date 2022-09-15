InscripcionCreate

import express from "express";
import {
    InscripcionCreate,
    InscripcionView
} from "../controllers/inscripcion.controller.js";

const routerInscripcion = express.Router();

//POST
//routerA.post('/', );
routerInscripcion.post('/InscripcionCreate', InscripcionCreate );
routerInscripcion.post('/InscripcionView', InscripcionView );

//PATCH
//routerA.patch('/', );

export default routerInscripcion;
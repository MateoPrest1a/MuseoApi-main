import express from "express";
import {
    IdiomaRegister
} from "../controllers/idioma.controller.js";

const routerIdioma = express.Router();

//POST
//routerA.post('/', );
routerIdioma.post('/IdiomaRegister', IdiomaRegister );

//PATCH
//routerA.patch('/', );

export default routerIdioma;
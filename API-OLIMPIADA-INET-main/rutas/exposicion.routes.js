import express from "express";
import {
    registrarExposicion,
    editarExposicion,
    listarExposicion
 } from "../controllers/exposicion.controller.js";

const routerE = express.Router();

//POST
//routerA.post('/', );
routerE.post('/registrarExposicion', registrarExposicion );
routerE.post('/editarExposicion', editarExposicion);
routerE.post('/listarExposicion', listarExposicion);

//PATCH
//routerA.patch('/', );

export default routerA;
import express from "express";
import {
    VisitanteRegister
 } from "../controllers/visitante.contoller.js";

const routerV = express.Router();

//POST
//routerA.post('/', );
routerV.post('/VisitanteRegister', VisitanteRegister );
routerV.post('/', );

//PATCH
//routerA.patch('/', );

export default routerV;
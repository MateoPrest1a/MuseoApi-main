import express from "express";
import {
    GuiaRegister
} from "../controllers/guia.controller.js";

const routerG = express.Router();

//POST
//routerA.post('/', );
routerG.post('/GuiaRegister', GuiaRegister);

//PATCH
//routerA.patch('/', );

export default routerG;
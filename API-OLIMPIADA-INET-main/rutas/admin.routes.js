import express from "express";
import {
    registrarUsuarioAdmin,
    confirmarUsuarioAdmin
 } from "../controllers/admin.controller.js";

const routerA = express.Router();

//POST
//routerA.post('/', );
routerA.post('/registrarUsuarioAdmin', registrarUsuarioAdmin );
routerA.post('/confirmarUsuarioAdmin', confirmarUsuarioAdmin);

//PATCH
//routerA.patch('/', );

export default routerA;
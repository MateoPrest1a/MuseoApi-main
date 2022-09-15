import express from "express";
import {
    VisitaGuiadaRegister,
    VisitaGuiadaView
} from "../controllers/visita.guiada.controller";

const routerVG = express.Router();

//POST
//routerI.post('/', );
routerVG.post('/VisitaGuiadaRegister/', VisitaGuiadaRegister );
routerVG.post('/VisitaGuiadaView/', VisitaGuiadaView );



export default routerVG;
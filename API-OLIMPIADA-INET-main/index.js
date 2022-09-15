import express from "express";
import cors from "cors";
import routerA from "./rutas/admin.routes";
import routerE from "./rutas/exposicion.routes";
import routerG from "./rutas/guia.routes";
import routerIdioma from "./rutas/idioma.routes";
import routerInscripcion from "./rutas/inscripcion.routes";
import routerI from "./rutas/institucion.routes";
import routerVG from "./rutas/visita.guiada.routes";
import routerV from "./rutas/visitante.routes";



const app = express();
app.use(cors());
app.use(express.json());
app.use(routerA);
app.use(routerE);
app.use(routerG);
app.use(routerIdioma);
app.use(routerInscripcion);
app.use(routerI);
app.use(routerVG);
app.use(routerV);

app.listen(5000, ()=> console.log('Server up and running...'));
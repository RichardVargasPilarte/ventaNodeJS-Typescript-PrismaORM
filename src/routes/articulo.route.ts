import { Router } from "express";
import { body } from "express-validator";
import validarCampos from "../middlewares/validar_campos";


import {
    obtenerArticulos,
    obtenerArticuloId,
    crearArticulo,
    actualizarArticulo,
    borrarArticulo,
    activarArticulo,
    desactivarArticulo
} from "../controllers/articulo.controller";

const articuloRouter = Router();


articuloRouter.get("/", obtenerArticulos);
articuloRouter.get("/:id", obtenerArticuloId);

articuloRouter.post("/", [
    body('codigo', 'El nombre es obligatorio').not().isEmpty(),
    body('nombre', 'El nombre es obligatorio').not().isEmpty(),
    body('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
    body('precio_venta', 'El precio de venta es obligatorio').not().isEmpty(),
    body('stock', 'El stock de articulos es obligatorio').not().isEmpty(),
    body('categoriaId', 'El id de la categoria es obligatorio').not().isEmpty(),
    body('estado', 'El estado del articulo es obligatorio').not().isEmpty(),
    validarCampos
],
    crearArticulo
);

articuloRouter.put("/:id", [
    body('codigo', 'El nombre es obligatorio').not().isEmpty(),
    body('nombre', 'El nombre es obligatorio').not().isEmpty(),
    body('descripcion', 'El descripcion es obligatorio').not().isEmpty(),
    body('precio_venta', 'El precio de venta es obligatorio').not().isEmpty(),
    body('stock', 'El stock de articulos es obligatorio').not().isEmpty(),
    body('categoriaId', 'El id de la categoria es obligatorio').not().isEmpty(),
    body('estado', 'El estado del articulo es obligatorio').not().isEmpty(),
    body('eliminado', 'El campo eliminado es obligatorio').not().isEmpty(),
    validarCampos
],
    actualizarArticulo
);

articuloRouter.delete("/:id", borrarArticulo);

articuloRouter.put("/:id", [
    body('estado', 'El estado del articulo es obligatorio').not().isEmpty(),
],
    activarArticulo
);

articuloRouter.put("/:id", [
    body('estado', 'El estado del articulo es obligatorio').not().isEmpty(),
],
    desactivarArticulo
);

export default articuloRouter;
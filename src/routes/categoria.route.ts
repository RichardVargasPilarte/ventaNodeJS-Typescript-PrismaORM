import { Router } from "express";
import { body } from "express-validator";
import validarCampos from "../middlewares/validar_campos";


import {
    obtenerCategorias,
    obtenerCategoriaId,
    crearCategoria,
    actualizarCategoria,
    borrarCategoria,
    activarCategoria,
    desactivarCategoria
} from "../controllers/categoria.controller";

const categoriaRouter = Router();


categoriaRouter.get("/", obtenerCategorias);
categoriaRouter.get("/:id", obtenerCategoriaId);

categoriaRouter.post("/", [
    body('nombre', 'El nombre es obligatorio').not().isEmpty(),
    body('descripcion', 'El descripcion es obligatorio').isEmail(),
    body('estado', 'El estado del arrticulo es obligatorio').not().isEmpty(),
    validarCampos
],
    crearCategoria
);

categoriaRouter.put("/:id", [
    body('nombre', 'El nombre es obligatorio').not().isEmpty(),
    body('descripcion', 'El descripcion es obligatorio').isEmail(),
    body('estado', 'El estado del arrticulo es obligatorio').not().isEmpty(),
    validarCampos
],
    actualizarCategoria
);

categoriaRouter.delete("/:id", borrarCategoria);

categoriaRouter.put("/:id", [
    body('estado', 'El estado del articulo es obligatorio').not().isEmpty(),
],
    activarCategoria
);

categoriaRouter.put("/:id", [
    body('estado', 'El estado del articulo es obligatorio').not().isEmpty(),
],
    desactivarCategoria
);

export default categoriaRouter;
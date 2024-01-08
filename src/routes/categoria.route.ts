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
    body('descripcion', 'El descripcion es obligatorio').not().isEmpty(),
    validarCampos
],
    crearCategoria
);

categoriaRouter.put("/:id", [
    body('nombre', 'El nombre es obligatorio').not().isEmpty(),
    body('descripcion', 'El descripcion es obligatorio').not().isEmpty(),
    body('estado', 'El estado es obligatorio').not().isEmpty(),
    body('eliminado', 'El campo eliminado es obligatorio').not().isEmpty(),
    validarCampos
],
    actualizarCategoria
);

categoriaRouter.delete("/:id", borrarCategoria);

categoriaRouter.put("/:id", [
    body('estado', 'El estado de la categoria es obligatorio').not().isEmpty(),
],
    activarCategoria
);

categoriaRouter.put("/:id", [
    body('estado', 'El estado de la categoria es obligatorio').not().isEmpty(),
],
    desactivarCategoria
);

export default categoriaRouter;
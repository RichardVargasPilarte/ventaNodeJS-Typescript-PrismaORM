import { Router } from "express";
import { body } from "express-validator";
import validarCampos from "../middlewares/validar_campos";


import {
    obtenerIngresos,
    obtenerIngresoId,
    crearIngreso,
    actualizarIngreso,
    borrarIngreso,
    activarIngreso,
    desactivarIngreso
} from "../controllers/ingreso.controller";

const ingresoRouter = Router();


ingresoRouter.get("/", obtenerIngresos);
ingresoRouter.get("/:id", obtenerIngresoId);

ingresoRouter.post("/", [
    body('tipo_comprobante', 'El tipo comprobante es obligatorio').not().isEmpty(),
    body('serie_comprobante', 'La serie del comprobante es obligatorio').not().isEmpty(),
    body('num_comprobante', 'El numero del comprobante es obligatorio').not().isEmpty(),
    body('impuesto', 'El impuesto es obligatorio').not().isEmpty(),
    body('total', 'El total a ingresar es obligatorio').not().isEmpty(),
    body('usuarioId', 'El id del usuario es obligatorio').not().isEmpty(),
    body('personaId', 'El id de la persona es obligatorio').not().isEmpty(),
    validarCampos
],
    crearIngreso
);

ingresoRouter.put("/:id", [
    body('tipo_comprobante', 'El tipo comprobante es obligatorio').not().isEmpty(),
    body('serie_comprobante', 'La serie del comprobante es obligatorio').not().isEmpty(),
    body('num_comprobante', 'El numero del comprobante es obligatorio').not().isEmpty(),
    body('impuesto', 'El impuesto es obligatorio').not().isEmpty(),
    body('total', 'El total a ingresar es obligatorio').not().isEmpty(),
    body('usuarioId', 'El id del usuario es obligatorio').not().isEmpty(),
    body('personaId', 'El id de la persona es obligatorio').not().isEmpty(),
    body('eliminado', 'El campo eliminado es obligatorio').not().isEmpty(),
    validarCampos
],
    actualizarIngreso
);

ingresoRouter.delete("/:id", borrarIngreso);

ingresoRouter.put("/:id", [
    body('estado', 'El estado del ingreso es obligatorio').not().isEmpty(),
],
    activarIngreso
);

ingresoRouter.put("/:id", [
    body('estado', 'El estado del ingreso es obligatorio').not().isEmpty(),
],
    desactivarIngreso
);

export default ingresoRouter;
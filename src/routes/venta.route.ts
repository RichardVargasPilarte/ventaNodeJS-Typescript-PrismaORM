import { Router } from "express";
import { body } from "express-validator";
import validarCampos from "../middlewares/validar_campos";


import {
    obtenerVentas,
    obtenerVentaId,
    crearVenta,
    actualizarVenta,
    borrarVenta
} from "../controllers/venta.controller";

const ventaRouter = Router();


ventaRouter.get("/", obtenerVentas);
ventaRouter.get("/:id", obtenerVentaId);

ventaRouter.post("/", [
    body('tipo_comprobante', 'El tipo comprobante es obligatorio').not().isEmpty(),
    body('serie_comprobante', 'La serie del comprobante es obligatorio').not().isEmpty(),
    body('num_comprobante', 'El numero de comprobante es obligatorio').not().isEmpty(),
    body('impuesto', 'El impuesto es obligatorio').not().isEmpty(),
    body('total', 'El total es obligatorio').not().isEmpty(),
    body('usuarioId', 'El id del usuario es obligatorio').not().isEmpty(),
    body('personaId', 'El id de la persona es obligatorio').not().isEmpty(),
    validarCampos
],
    crearVenta
);

ventaRouter.put("/:id", [
    body('tipo_comprobante', 'El tipo comprobante es obligatorio').not().isEmpty(),
    body('serie_comprobante', 'La serie del comprobante es obligatorio').not().isEmpty(),
    body('num_comprobante', 'El numero de comprobante es obligatorio').not().isEmpty(),
    body('impuesto', 'El impuesto es obligatorio').not().isEmpty(),
    body('total', 'El total es obligatorio').not().isEmpty(),
    body('usuarioId', 'El id del usuario es obligatorio').not().isEmpty(),
    body('personaId', 'El id de la persona es obligatorio').not().isEmpty(),
    body('eliminado', 'El campo eliminado es obligatorio').not().isEmpty(),
    validarCampos
],
    actualizarVenta
);

ventaRouter.delete("/:id", borrarVenta);

export default ventaRouter;
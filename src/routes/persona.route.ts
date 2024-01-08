import { Router } from "express";
import { body } from "express-validator";
import validarCampos from "../middlewares/validar_campos";


import {
    obtenerPersonas,
    obtenerClientes,
    obtenerProveedores,
    obtenerPersonaId,
    crearPersona,
    actualizarPersona,
    borrarPersona,
    activarPersona,
    desactivarPersona
} from "../controllers/persona.controller";

const personaRouter = Router();

personaRouter.get("/", obtenerPersonas);
personaRouter.get("/clientes", obtenerClientes);
personaRouter.get("/proveedores", obtenerProveedores);
personaRouter.get("/:id", obtenerPersonaId);

personaRouter.post("/", [
    body('nombre', 'El nombre es obligatorio').not().isEmpty(),
    body('apellido', 'El apellido es obligatorio').isEmpty(),
    body('tipo_persona', 'El precio de venta es obligatorio').not().isEmpty(),
    body('tipo_documento', 'El tipo de documento es obligatorio').not().isEmpty(),
    body('num_documento', 'El numero de documento es obligatorio').not().isEmpty(),
    body('direccion', 'La direccion es obligatoria').not().isEmpty(),
    body('telefono', 'El numero de telefono es obligatorio').not().isEmpty(),
    body('email', 'El correo electronico es obligatorio').isEmail(),
    body('estado', 'El estado del arrticulo es obligatorio').not().isEmpty(),
    validarCampos
],
    crearPersona
);

personaRouter.put("/:id", [
    body('nombre', 'El nombre es obligatorio').not().isEmpty(),
    body('apellido', 'El apellido es obligatorio').isEmpty(),
    body('tipo_persona', 'El precio de venta es obligatorio').not().isEmpty(),
    body('tipo_documento', 'El tipo de documento es obligatorio').not().isEmpty(),
    body('num_documento', 'El numero de documento es obligatorio').not().isEmpty(),
    body('direccion', 'La direccion es obligatoria').not().isEmpty(),
    body('telefono', 'El numero de telefono es obligatorio').not().isEmpty(),
    body('email', 'El correo electronico es obligatorio').isEmail(),
    body('estado', 'El estado del arrticulo es obligatorio').not().isEmpty(),
    validarCampos
],
    actualizarPersona
);

personaRouter.delete("/:id", borrarPersona);

personaRouter.put("/:id", [
    body('estado', 'El estado del articulo es obligatorio').not().isEmpty(),
],
    activarPersona
);

personaRouter.put("/:id", [
    body('estado', 'El estado del articulo es obligatorio').not().isEmpty(),
],
    desactivarPersona
);

export default personaRouter;
import { Router } from "express";
import { body } from "express-validator";
import validarCampos from "../middlewares/validar_campos";


import {
    obtenerUsuarios,
    obtenerUsuarioId,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario,
    activarUsuario,
    desactivarUsuario
} from "../controllers/usuario.controller";

const usuarioRouter = Router();

usuarioRouter.get("/", obtenerUsuarios);
usuarioRouter.get("/:id", obtenerUsuarioId);

usuarioRouter.post("/", [
    body('nombre', 'El nombre es obligatorio').not().isEmpty(),
    body('apellido', 'El apellido es obligatorio').isEmpty(),    body('email', 'El correo electronico es obligatorio').isEmail(),
    body('role', 'El rol del usuario es obligatorio').not().isEmpty,
    body('username', 'El nombre de usuario es obligatorio').not().isEmpty(),
    body('tipo_documento', 'El tipo de documento es obligatorio').not().isEmpty(),
    body('num_documento', 'El numero de documento es obligatorio').not().isEmpty(),
    body('direccion', 'La direccion es obligatoria').not().isEmpty(),
    body('telefono', 'El numero de telefono es obligatorio').not().isEmpty(),
    body('password', 'La contraseña es obligatoria').not().isEmpty(),
    body('estado', 'El estado del usuario es obligatorio').not().isEmpty(),
    validarCampos
],
    crearUsuario
);

usuarioRouter.put("/:id", [
    body('nombre', 'El nombre es obligatorio').not().isEmpty(),
    body('apellido', 'El apellido es obligatorio').isEmpty(),    body('email', 'El correo electronico es obligatorio').isEmail(),
    body('role', 'El rol del usuario es obligatorio').not().isEmpty,
    body('username', 'El nombre de usuario es obligatorio').not().isEmpty(),
    body('tipo_documento', 'El tipo de documento es obligatorio').not().isEmpty(),
    body('num_documento', 'El numero de documento es obligatorio').not().isEmpty(),
    body('direccion', 'La direccion es obligatoria').not().isEmpty(),
    body('telefono', 'El numero de telefono es obligatorio').not().isEmpty(),
    body('password', 'La contraseña es obligatoria').not().isEmpty(),
    body('estado', 'El estado del usuario es obligatorio').not().isEmpty(),
    validarCampos
],
    actualizarUsuario
);

usuarioRouter.delete("/:id", borrarUsuario);

usuarioRouter.put("/:id", [
    body('estado', 'El estado del usuario es obligatorio').not().isEmpty(),
],
    activarUsuario
);

usuarioRouter.put("/:id", [
    body('estado', 'El estado del usuario es obligatorio').not().isEmpty(),
],
    desactivarUsuario
);

export default usuarioRouter;
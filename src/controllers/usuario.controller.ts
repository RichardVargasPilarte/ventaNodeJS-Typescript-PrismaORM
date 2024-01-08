import { PrismaClient } from "@prisma/client";

const usuarioClient = new PrismaClient().usuario;

export const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await usuarioClient.findMany({
            include: {
                ingreso: true,
                venta: true
            },
            where: {
                eliminado: "NO"
            }
        });

        res.status(200).json({ data: usuarios });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}

export const obtenerUsuarioId = async (req, res) => {
    try {

        const usuarioId = req.params.id;
        const usuario = await usuarioClient.findUnique({
            where: {
                id: usuarioId
            },
            include: {
                ingreso: true,
                venta: true
            }
        });

        if (!usuario) {
            res.status(404).send({
                message: "Usuario no encontrado"
            });
        } else {
            res.status(200).json({ data: usuario })
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}

export const crearUsuario = async (req, res) => {
    try {
        const usuarioData = req.body;
        const usuario = await usuarioClient.create({
            data: {
                nombre: usuarioData.nombre,
                apellido: usuarioData.apellido,
                email: usuarioData.email,
                role: usuarioData.role,
                username: usuarioData.username,
                tipo_documento: usuarioData.tipo_documento,
                num_documento: usuarioData.num_documento,
                direccion: usuarioData.direccion,
                telefono: usuarioData.telefono,
                password: usuarioData.password,
                estado: usuarioData.estado,
                createdAt: usuarioData.createdAt,
                eliminado: usuarioData.eliminado
            }
        });

        res.status(201).json({ data:usuario })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}


export const actualizarUsuario = async (req, res) => {
    try {
        const usuarioId = req.params.id;
        const usuarioData = req.body;

        const usuario = await usuarioClient.update({
            where: {
                id: usuarioId
            },
            data: usuarioData
        });

        res.status(200).json({ data: usuario })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}

export const borrarUsuario = async (req, res) => {
    try {
        const usuarioId = req.params.id
        const usuario = await usuarioClient.update({
            where: {
                id: usuarioId
            },
            data: {
                eliminado: "SI"
            }
        });

        res.status(200).json({ data: {} })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}

export const activarUsuario = async (req, res) => {
    try {
        const usuarioId = req.params.id;

        const usuario = await usuarioClient.update({
            where: {
                id: usuarioId
            },
            data: {
                estado: 1
            }
        })

        res.status(200).json({ data: usuario })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}

export const desactivarUsuario = async (req, res) => {
    try {
        const usuarioId = req.params.id;

        const usuario = await usuarioClient.update({
            where: {
                id: usuarioId
            },
            data: {
                estado: 0
            }
        })

        res.status(200).json({ data: usuario })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}
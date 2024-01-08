import { PrismaClient } from "@prisma/client";

const personaClient = new PrismaClient().persona;

export const obtenerPersonas = async (req, res) => {
    try {
        const personas = await personaClient.findMany({
            include: {
                ingreso: true,
                venta: true
            },
            where: {
                eliminado: "NO"
            }
        });

        res.status(200).json({ data: personas });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}

export const obtenerClientes = async (req, res) => {
    try {
        const clientes = await personaClient.findMany({
            where: {
                tipo_persona: "Cliente",
                eliminado: "NO"
            }
        });

        res.status(200).json({ data: clientes });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}

export const obtenerProveedores = async (req, res) => {
    try {
        const proveedores = await personaClient.findMany({
            where: {
                tipo_persona: "Proveedores",
                eliminado: "NO"
            }
        });

        res.status(200).json({ data: proveedores });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}

export const obtenerPersonaId = async (req, res) => {
    try {

        const personaId = req.params.id;
        const persona = await personaClient.findUnique({
            where: {
                id: personaId
            },
            include: {
                ingreso: true,
                venta: true
            }
        });

        if (!persona) {
            res.status(404).send({
                message: "Persona no encontrado"
            });
        } else {
            res.status(200).json({ data: persona })
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}

export const crearPersona = async (req, res) => {
    try {
        const personaData = req.body;
        const persona = await personaClient.create({
            data: {
                nombre: personaData.nombre,
                apellido: personaData.apellido,
                tipo_persona: personaData.tipo_persona,
                tipo_documento: personaData.tipo_documento,
                num_documento: personaData.num_documento,
                direccion: personaData.direccion,
                telefono: personaData.telefono,
                email: personaData.email,
                estado: personaData.estado,
                createdAt: personaData.createdAt,
            }
        });

        res.status(201).json({ data: persona })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}


export const actualizarPersona = async (req, res) => {
    try {
        const personaId = req.params.id;
        const personaData = req.body;

        const persona = await personaClient.update({
            where: {
                id: personaId
            },
            data: personaData
        });

        res.status(200).json({ data: persona })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}

export const borrarPersona = async (req, res) => {
    try {
        const personaId = req.params.id
        const persona = await personaClient.update({
            where: {
                id: personaId
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

export const activarPersona = async (req, res) => {
    try {
        const personaId = req.params.id;

        const persona = await personaClient.update({
            where: {
                id: personaId
            },
            data: {
                estado: 1
            }
        })

        res.status(200).json({ data: persona })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}

export const desactivarPersona = async (req, res) => {
    try {
        const personaId = req.params.id;

        const persona = await personaClient.update({
            where: {
                id: personaId
            },
            data: {
                estado: 0
            }
        })

        res.status(200).json({ data: persona })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}
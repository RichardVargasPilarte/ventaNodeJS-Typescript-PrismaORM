import { PrismaClient } from "@prisma/client";

const ingresoClient = new PrismaClient().ingreso;

export const obtenerIngresos = async (req, res) => {
    try {
        const ingresos = await ingresoClient.findMany({
            include: {
                usuario: true,
                persona: true
            },
            where: {
                eliminado: "NO"
            }
        });

        res.status(200).json({ data: ingresos });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}

export const obtenerIngresoId = async (req, res) => {
    try {

        const ingresoId = req.params.id;
        const ingreso = await ingresoClient.findUnique({
            where: {
                id: ingresoId
            },
            include: {
                usuario: true,
                persona: true
            }
        });

        if (!ingreso) {
            res.status(404).send({
                message: "Ingreso no encontrado"
            });
        } else {
            res.status(200).json({ data: ingreso })
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}

export const crearIngreso = async (req, res) => {
    try {
        const ingresoData = req.body;
        const ingreso = await ingresoClient.create({
            data: {
                tipoComprobante: ingresoData.tipoComprobante,
                serieComprobante: ingresoData.serieComprobante,
                numComprobante: ingresoData.numComprobante,
                impuesto: ingresoData.impuesto,
                total: ingresoData.total,
                estado: ingresoData.estado,
                usuario: {
                    connect: {
                        id: ingresoData.usuarioId
                    }
                },
                persona: {
                    connect: {
                        id: ingresoData.personaId
                    }
                }
            }
        });

        res.status(201).json({ data:ingreso })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}


export const actualizarIngreso = async (req, res) => {
    try {
        const ingresoId = req.params.id;
        const ingresoData = req.body;

        const ingreso = await ingresoClient.update({
            where: {
                id: ingresoId
            },
            data: ingresoData
        });

        res.status(200).json({ data: ingreso })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}

export const borrarIngreso = async (req, res) => {
    try {
        const ingresoId = req.params.id
        const ingreso = await ingresoClient.update({
            where: {
                id: ingresoId
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

export const activarIngreso = async (req, res) => {
    try {
        const ingresoId = req.params.id;

        const ingreso = await ingresoClient.update({
            where: {
                id: ingresoId
            },
            data: {
                estado: 1
            }
        })

        res.status(200).json({ data: ingreso })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}

export const desactivarIngreso = async (req, res) => {
    try {
        const ingresoId = req.params.id;

        const ingreso = await ingresoClient.update({
            where: {
                id: ingresoId
            },
            data: {
                estado: 0
            }
        })

        res.status(200).json({ data: ingreso })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}
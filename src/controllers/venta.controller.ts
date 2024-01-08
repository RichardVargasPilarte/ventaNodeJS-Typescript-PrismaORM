import { PrismaClient } from "@prisma/client";

const ventaClient = new PrismaClient().venta;

export const obtenerVentas = async (req, res) => {
    try {
        const ventas = await ventaClient.findMany({
            include: {
                usuario: true,
                persona: true
            },
            where: {
                eliminado: "NO"
            }
        });

        res.status(200).json({ data: ventas });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}

export const obtenerVentaId = async (req, res) => {
    try {

        const ventaId = req.params.id;
        const venta = await ventaClient.findUnique({
            where: {
                id: ventaId
            },
            include: {
                usuario: true,
                persona: true
            }
        });

        if (!venta) {
            res.status(404).send({
                message: "Venta no encontrada"
            });
        } else {
            res.status(200).json({ data: venta })
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}

export const crearVenta = async (req, res) => {
    try {
        const ventaData = req.body;
        const venta = await ventaClient.create({
            data: {
                tipo_comprobante: ventaData.tipo_comprobante,
                serie_comprobante: ventaData.serie_comprobante,
                num_comprobante: ventaData.num_comprobante,
                impuesto: ventaData.impuesto,
                total: ventaData.total,
                usuario: {
                    connect: {
                        id: ventaData.usuarioId
                    }
                },
                persona: {
                    connect: {
                        id: ventaData.personaId
                    }
                }
            }
        });

        res.status(201).json({ data:venta })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}

export const actualizarVenta = async (req, res) => {
    try {
        const ventaId = req.params.id;
        const ventaData = req.body;

        const venta = await ventaClient.update({
            where: {
                id: ventaId
            },
            data: ventaData
        });

        res.status(200).json({ data: venta })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}

export const borrarVenta = async (req, res) => {
    try {
        const ventaId = req.params.id
        const venta = await ventaClient.update({
            where: {
                id: ventaId
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

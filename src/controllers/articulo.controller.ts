import { PrismaClient } from "@prisma/client";

const articuloClient = new PrismaClient().articulo;

export const obtenerArticulos = async (req, res) => {
    try {
        const articulos = await articuloClient.findMany({
            include: {
                categoria: true
            },
            where: {
                eliminado: "NO"
            }
        });

        res.status(200).json({ data: articulos });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}

export const obtenerArticuloId = async (req, res) => {
    try {

        const articuloId = req.params.id;
        const articulo = await articuloClient.findUnique({
            where: {
                id: articuloId
            },
            include: {
                categoria: true
            }
        });

        if (!articulo) {
            res.status(404).send({
                message: "Articulo no encontrado"
            });
        } else {
            res.status(200).json({ data: articulo })
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}

export const crearArticulo = async (req, res) => {
    try {
        const articuloData = req.body;
        const articulo = await articuloClient.create({
            data: {
                codigo: articuloData.codigo,
                nombre: articuloData.nombre,
                descripcion: articuloData.descripcion,
                precioVenta: articuloData.precioVenta,
                stock: articuloData.stock,
                estado: articuloData.estado,
                categoria: {
                    connect: {
                        id: articuloData.categoriaId
                    }
                }
            }
        });

        res.status(201).json({ data:articulo })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}


export const actualizarArticulo = async (req, res) => {
    try {
        const articuloId = req.params.id;
        const articuloData = req.body;

        const articulo = await articuloClient.update({
            where: {
                id: articuloId
            },
            data: articuloData
        });

        res.status(200).json({ data: articulo })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}

export const borrarArticulo = async (req, res) => {
    try {
        const articuloId = req.params.id
        const articulo = await articuloClient.update({
            where: {
                id: articuloId
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

export const activarArticulo = async (req, res) => {
    try {
        const articuloId = req.params.id;

        const articulo = await articuloClient.update({
            where: {
                id: articuloId
            },
            data: {
                estado: 1
            }
        })

        res.status(200).json({ data: articulo })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}

export const desactivarArticulo = async (req, res) => {
    try {
        const articuloId = req.params.id;

        const articulo = await articuloClient.update({
            where: {
                id: articuloId
            },
            data: {
                estado: 0
            }
        })

        res.status(200).json({ data: articulo })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}
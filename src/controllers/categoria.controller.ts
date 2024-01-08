import { PrismaClient } from "@prisma/client";

const categoriaClient = new PrismaClient().categoria;

export const obtenerCategorias = async (req, res) => {
    try {
        const categorias = await categoriaClient.findMany({
            include: {
                articulo: true
            },
            where: {
                eliminado: "NO"
            }
        });

        res.status(200).json({ data: categorias });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}

export const obtenerCategoriaId = async (req, res) => {
    try {

        const categoriaId = req.params.id;
        const categoria = await categoriaClient.findUnique({
            where: {
                id: categoriaId
            },
            include: {
                articulo: true
            }
        });

        if (!categoria) {
            res.status(404).send({
                message: "Categoria no encontrado"
            });
        } else {
            res.status(200).json({ data: categoria })
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}

export const crearCategoria = async (req, res) => {
    try {
        const categoriaData = req.body;
        const categoria = await categoriaClient.create({
            data: {
                nombre: categoriaData.nombre,
                descripcion: categoriaData.descripcion,
                estado: categoriaData.estado,
                createdAt: categoriaData.createdAt,
                eliminado: categoriaData.eliminado,
            }
        });

        res.status(201).json({ data:categoria })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}

export const actualizarCategoria = async (req, res) => {
    try {
        const categoriaId = req.params.id;
        const categoriaData = req.body;

        const categoria = await categoriaClient.update({
            where: {
                id: categoriaId
            },
            data: categoriaData
        });

        res.status(200).json({ data: categoria })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}

export const borrarCategoria = async (req, res) => {
    try {
        const categoriaId = req.params.id
        const categoria = await categoriaClient.update({
            where: {
                id: categoriaId
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

export const activarCategoria = async (req, res) => {
    try {
        const categoriaId = req.params.id;

        const categoria = await categoriaClient.update({
            where: {
                id: categoriaId
            },
            data: {
                estado: 1
            }
        })

        res.status(200).json({ data: categoria })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}

export const desactivarCategoria = async (req, res) => {
    try {
        const categoriaId = req.params.id;

        const categoria = await categoriaClient.update({
            where: {
                id: categoriaId
            },
            data: {
                estado: 0
            }
        })

        res.status(200).json({ data: categoria })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Ocurrio un error"
        });
    }
}
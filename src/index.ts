import express from 'express';
import morgan from 'morgan';
import cors from 'cors';


import articuloRouter from './routes/articulo.route';
import categoriaRouter from './routes/categoria.route';
import ingresoRouter from './routes/ingreso.route';
import personaRouter from './routes/persona.route';
import usuarioRouter from './routes/usuario.route';
import ventaRouter from './routes/venta.route';

const app = express();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(morgan('dev'));

app.use(express.json());

app.use('/api/articulo', articuloRouter);
app.use('/api/categoria', categoriaRouter);
app.use('/api/ingreso', ingresoRouter);
app.use('/api/persona', personaRouter);
app.use('/api/usuario', usuarioRouter);
app.use('/api/venta', ventaRouter);

/**
app.get("/ping", (req, res) => {
    res.json({
        message:"Pong"
    }).status(200);
});

*/

app.listen(process.env.PORT, () => {
    console.log('Server listening on port:' + process.env.PORT);
});
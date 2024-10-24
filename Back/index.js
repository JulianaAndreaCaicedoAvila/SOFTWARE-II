const express = require('express');
const sequelize = require('./config/database');

const productoRoutes = require('./routes/productoRoutes'); // Rutas para el CRUD de productos
const userRoutes = require('./routes/userRoutes'); // Rutas para el CRUD de usuarios
const inventarioRoutes = require('./routes/inventarioRoutes'); // Rutas para el CRUD de inventario
const PedidoRoutes = require('./routes/PedidoRoutes');
const PagoRoutes = require('./routes/PagoRoutes');
const DescuentoRoutes = require('./routes/DescuentoRoutes');
const CarritoRoutes = require('./routes/CarritoRoutes');
const HistorialCompraRoutes = require('./routes/HistorialCompraRoutes');




const app = express();

// Middleware para parsear JSON
app.use(express.json());

const PORT = 3000; // Puerto del servidor
// Rutas para Pedido
app.use('/api/HistorialCompra', HistorialCompraRoutes);
// Rutas para Pedido
app.use('/api/Carrito', CarritoRoutes);
// Rutas para Pedido
app.use('/api/Descuento', DescuentoRoutes);
// Rutas para Pedido
app.use('/api/Pago', PagoRoutes);

// Rutas para Pedido
app.use('/api/Pedido', PedidoRoutes);


// Rutas para productos
app.use('/api/productos', productoRoutes);

// Rutas para usuarios
app.use('/api/usuarios', userRoutes);

// Rutas para inventario
app.use('/api/inventario', inventarioRoutes);

// Sincronizar modelos y luego iniciar el servidor
sequelize.sync({ alter: true })
    .then(() => {
        console.log('Tablas sincronizadas con la base de datos MySQL :3');
        app.listen(PORT, () => {
            console.log(`:p Servidor corriendo en el puerto ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Error al sincronizar las tablas o al iniciar el servidor:', err);
    });

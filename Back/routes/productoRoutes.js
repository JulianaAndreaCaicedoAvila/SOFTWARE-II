const express = require('express');
const router = express.Router();
const {
  crearProducto,
  obtenerProductos,
  obtenerProductoPorId,
  actualizarProducto,
  eliminarProducto
} = require('../controllers/productoController');

// Ruta para obtener todos los productos
router.get('/productosALL', obtenerProductos);

// Ruta para obtener un producto por ID
router.get('/producto/:id', obtenerProductoPorId); 

// Ruta para crear un nuevo producto
router.post('/productos', crearProducto);

// Ruta para actualizar un producto existente
router.put('/productos/:id', actualizarProducto);

// Ruta para eliminar un producto
router.delete('/productos/:id', eliminarProducto);

module.exports = router;

const express = require('express');
const router = express.Router();
const {
  crearInventario,
  obtenerInventarios,
  obtenerInventarioId,
  actualizarInventario,
  eliminarInventario
} = require('../controllers/inventarioController');

// Rutas para el inventario


router.post('/inventario', crearInventario);
router.get('/inventarioALL', obtenerInventarios);
router.put('/inventario/:id', actualizarInventario);
router.delete('/inventario/:id', eliminarInventario);
router.get('/inventario/:id', obtenerInventarioId); 
module.exports = router;

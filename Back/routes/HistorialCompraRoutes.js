const express = require('express');
const router = express.Router();
const {
    crearHistorialCompra,
    obtenerHistorialCompra,
    obtenerHistorialCompraPorId, 
    actualizarHistorialCompra,
    eliminarHistorialCompra
} = require('../controllers/HistorialCompraController');

router.get('/HistorialCompraALL', obtenerHistorialCompra);
router.get( '/HistorialCompra/:id', obtenerHistorialCompraPorId);
router.post('/HistorialCompra', crearHistorialCompra);
router.put('/HistorialCompra/:id', actualizarHistorialCompra);
router.delete('/HistorialCompra/:id', eliminarHistorialCompra);

module.exports = router;

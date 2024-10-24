const express = require('express');
const router = express.Router();
const {
    crearPago,
    obtenerPago,
    obtenerobtenerPagoId,
    actualizarPago,
    eliminarPago
} = require('../controllers/PagoController');

router.get('/PagoALL', obtenerPago);
router.get( '/Pago/:id', obtenerobtenerPagoId);
router.post('/Pago', crearPago);
router.put('/Pago/:id', actualizarPago);
router.delete('/Pago/:id', eliminarPago);

module.exports = router;

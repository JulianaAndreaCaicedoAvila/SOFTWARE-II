const express = require('express');
const router = express.Router();
const {
    crearDescuento,
    obtenerDescuento,
    obtenerobtenerDescuentoId,
    actualizarDescuento,
    eliminarDescuento
} = require('../controllers/DescuentoController');

router.get('/DescuentoALL', obtenerDescuento);
router.get( '/Descuento/:id', obtenerobtenerDescuentoId);
router.post('/Descuento', crearDescuento);
router.put('/Descuento/:id', actualizarDescuento);
router.delete('/Descuento/:id', eliminarDescuento);

module.exports = router;

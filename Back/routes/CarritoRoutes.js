const express = require('express');
const router = express.Router();
const {
    crearCarrito,
    obtenerCarrito,
    obtenerCarritoPorId, 
    actualizarCarrito,
    eliminarCarrito
} = require('../controllers/CarritoController');

router.get('/CarritoALL', obtenerCarrito);
router.get( '/Carrito/:id', obtenerCarritoPorId);
router.post('/Carrito', crearCarrito);
router.put('/Carrito/:id', actualizarCarrito);
router.delete('/Carrito/:id', eliminarCarrito);

module.exports = router;

const express = require('express');
const router = express.Router();
const {
    crearPedido,
  obtenerPedido,
  obtenerobtenerPedidoId,
  actualizarPedido,
  eliminarPedido
} = require('../controllers/PedidoController');

router.get('/PedidoALL', obtenerPedido);
router.get( '/Pedido/:id', obtenerobtenerPedidoId);
router.post('/Pedido', crearPedido);
router.put('/Pedido/:id', actualizarPedido);
router.delete('/Pedido/:id', eliminarPedido);

module.exports = router;

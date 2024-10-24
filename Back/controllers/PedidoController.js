const Pedido = require('../models/Pedido');

const crearPedido = async (req, res) => {
  try {
    const nuevoPedido = await Pedido.create(req.body);
    res.status(201).json(nuevoPedido);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const obtenerPedido = async (req, res) => {
  try {
    const Pedidos = await Pedido.findAll();
    res.status(200).json(Pedidos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const obtenerobtenerPedidoId = async (req, res) => {
  try {
    const Pedidos = await Pedido.findByPk(req.params.id);
    if (Pedidos) {
      res.status(200).json(Pedidos);
      console.log();
    } else {
      res.status(404).json({ error: 'Pedido no encontrado' });
      console.log();
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const actualizarPedido = async (req, res) => {
  try {
    const PedidoActualizado = await Pedido.update(req.body, {
      where: { ID_Pedido: req.params.id }
    });
    res.status(200).json(PedidoActualizado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
const eliminarPedido = async (req, res) => {
  try {
    await Pedido.destroy({ where: { ID_Pedido: req.params.id } });
    res.status(200).json({ message: 'Pedido eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  crearPedido,
  obtenerPedido,
  obtenerobtenerPedidoId,
  actualizarPedido,
  eliminarPedido
};

const HistorialCompra = require('../models/HistorialCompra');

const crearHistorialCompra = async (req, res) => {
  try {
    const nuevoProducto = await HistorialCompra.create(req.body);
    res.status(201).json(nuevoProducto);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const obtenerHistorialCompra = async (req, res) => {
  try {
    const productos = await HistorialCompra.findAll();
    res.status(200).json(productos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const obtenerHistorialCompraPorId = async (req, res) => {
  try {
    const producto = await HistorialCompra.findByPk(req.params.id);
    if (producto) {
      res.status(200).json(producto);
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const actualizarHistorialCompra = async (req, res) => {
  try {
    const productoActualizado = await HistorialCompra.update(req.body, {
      where: { ID_HistorialCompra: req.params.id }
    });
    res.status(200).json(productoActualizado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const eliminarHistorialCompra = async (req, res) => {
  try {
    await HistorialCompra.destroy({ where: { ID_HistorialCompra: req.params.id } });
    res.status(200).json({ message: 'Producto eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  crearHistorialCompra,
  obtenerHistorialCompra,
  obtenerHistorialCompraPorId, 
  actualizarHistorialCompra,
  eliminarHistorialCompra
};

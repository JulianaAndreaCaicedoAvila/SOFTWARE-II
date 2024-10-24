const Producto = require('../models/producto');

const crearProducto = async (req, res) => {
  try {
    const nuevoProducto = await Producto.create(req.body);
    res.status(201).json(nuevoProducto);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.status(200).json(productos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const obtenerProductoPorId = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (producto) {
      res.status(200).json(producto);
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const actualizarProducto = async (req, res) => {
  try {
    const productoActualizado = await Producto.update(req.body, {
      where: { id: req.params.id }
    });
    res.status(200).json(productoActualizado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const eliminarProducto = async (req, res) => {
  try {
    await Producto.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: 'Producto eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  crearProducto,
  obtenerProductos,
  obtenerProductoPorId, 
  actualizarProducto,
  eliminarProducto
};

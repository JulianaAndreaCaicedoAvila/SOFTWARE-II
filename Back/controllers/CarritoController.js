const Carrito = require('../models/Carrito');

const crearCarrito = async (req, res) => {
  try {
    const nuevoProducto = await Carrito.create(req.body);
    res.status(201).json(nuevoProducto);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const obtenerCarrito = async (req, res) => {
  try {
    const productos = await Carrito.findAll();
    res.status(200).json(productos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const obtenerCarritoPorId = async (req, res) => {
  try {
    const producto = await Carrito.findByPk(req.params.id);
    if (producto) {
      res.status(200).json(producto);
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const actualizarCarrito = async (req, res) => {
  try {
    const productoActualizado = await Carrito.update(req.body, {
      where: { ID_Carrito: req.params.id }
    });
    res.status(200).json(productoActualizado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const eliminarCarrito = async (req, res) => {
  try {
    await Carrito.destroy({ where: { ID_Carrito: req.params.id } });
    res.status(200).json({ message: 'Producto eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  crearCarrito,
  obtenerCarrito,
  obtenerCarritoPorId, 
  actualizarCarrito,
  eliminarCarrito
};

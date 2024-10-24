const Inventory = require('../models/inventarioModel');

const crearInventario = async (req, res) => {
  try {
    const nuevoInventario = await Inventory.create(req.body);
    res.status(201).json(nuevoInventario);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const obtenerInventarios = async (req, res) => {
  try {
    const inventarios = await Inventory.findAll();
    res.status(200).json(inventarios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const obtenerInventarioId= async (req, res) => {
  try {
    const inventario = await inventario.findByPk(req.params.id);
    if (inventario) {
      res.status(200).json(inventario);
    } else {
      res.status(404).json({ error: 'inventario no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const actualizarInventario = async (req, res) => {
  try {
    const inventarioActualizado = await Inventory.update(req.body, {
      where: { id: req.params.id }
    });
    if (inventarioActualizado[0] === 0) {
      return res.status(404).json({ error: 'Registro de inventario no encontrado' });
    }
    res.status(200).json({ message: 'Registro de inventario actualizado' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const eliminarInventario = async (req, res) => {
  try {
    const resultado = await Inventory.destroy({ where: { id: req.params.id } });
    if (resultado === 0) {
      return res.status(404).json({ error: 'Registro de inventario no encontrado' });
    }
    res.status(200).json({ message: 'Registro de inventario eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  crearInventario,
  obtenerInventarios,
  obtenerInventarioId,
  actualizarInventario,
  eliminarInventario
};

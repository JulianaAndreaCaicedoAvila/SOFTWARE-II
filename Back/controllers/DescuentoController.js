const Descuento = require('../models/Descuentos');

const crearDescuento = async (req, res) => {
  try {
    const nuevoUsuario = await Descuento.create(req.body);
    res.status(201).json(nuevoUsuario);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const obtenerDescuento = async (req, res) => {
  try {
    const usuarios = await Descuento.findAll();
    res.status(200).json(usuarios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const obtenerobtenerDescuentoId = async (req, res) => {
  try {
    const usuarios = await Descuento.findByPk(req.params.id);
    if (usuarios) {
      res.status(200).json(usuarios);
    } else {
      res.status(404).json({ error: 'usuario no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const actualizarDescuento = async (req, res) => {
  try {
    const usuarioActualizado = await Descuento.update(req.body, {
      where: { ID_Descuento: req.params.id }
    });
    res.status(200).json(usuarioActualizado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
const eliminarDescuento = async (req, res) => {
  try {
    await Descuento.destroy({ where: { ID_Descuento: req.params.id } });
    res.status(200).json({ message: 'Usuario eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  crearDescuento,
  obtenerDescuento,
  obtenerobtenerDescuentoId,
  actualizarDescuento,
  eliminarDescuento
};

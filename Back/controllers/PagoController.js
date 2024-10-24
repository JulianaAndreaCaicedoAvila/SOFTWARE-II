const Pago = require('../models/pago');

const crearPago = async (req, res) => {
  try {
    const nuevoUsuario = await Pago.create(req.body);
    res.status(201).json(nuevoUsuario);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const obtenerPago = async (req, res) => {
  try {
    const usuarios = await Pago.findAll();
    res.status(200).json(usuarios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const obtenerobtenerPagoId = async (req, res) => {
  try {
    const usuarios = await Pago.findByPk(req.params.id);
    if (usuarios) {
      res.status(200).json(usuarios);
    } else {
      res.status(404).json({ error: 'usuario no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const actualizarPago = async (req, res) => {
  try {
    const usuarioActualizado = await Pago.update(req.body, {
      where: { ID_Pago: req.params.id }
    });
    res.status(200).json(usuarioActualizado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
const eliminarPago = async (req, res) => {
  try {
    await Pago.destroy({ where: { ID_Pago: req.params.id } });
    res.status(200).json({ message: 'Usuario eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  crearPago,
  obtenerPago,
  obtenerobtenerPagoId,
  actualizarPago,
  eliminarPago
};

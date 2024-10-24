const User = require('../models/userModel');

const crearUsuario = async (req, res) => {
  try {
    const nuevoUsuario = await User.create(req.body);
    res.status(201).json(nuevoUsuario);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await User.findAll();
    res.status(200).json(usuarios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const obtenerobtenerUsuariosId = async (req, res) => {
  try {
    const usuarios = await User.findByPk(req.params.id);
    if (usuarios) {
      res.status(200).json(usuarios);
    } else {
      res.status(404).json({ error: 'usuario no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const actualizarUsuario = async (req, res) => {
  try {
    const usuarioActualizado = await User.update(req.body, {
      where: { ID_usuario: req.params.id }
    });
    res.status(200).json(usuarioActualizado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
const eliminarUsuario = async (req, res) => {
  try {
    await User.destroy({ where: { ID_usuario: req.params.id } });
    res.status(200).json({ message: 'Usuario eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  crearUsuario,
  obtenerUsuarios,
  obtenerobtenerUsuariosId,
  actualizarUsuario,
  eliminarUsuario
};

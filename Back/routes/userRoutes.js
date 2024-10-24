const express = require('express');
const router = express.Router();
const {
  crearUsuario,
  obtenerUsuarios,
  obtenerobtenerUsuariosId,
  actualizarUsuario,
  eliminarUsuario
} = require('../controllers/userController');

router.get('/usuariosALL', obtenerUsuarios);
router.get( '/usuarios/:id', obtenerobtenerUsuariosId);
router.post('/usuarios', crearUsuario);
router.put('/usuarios/:id', actualizarUsuario);
router.delete('/usuarios/:id', eliminarUsuario);

module.exports = router;

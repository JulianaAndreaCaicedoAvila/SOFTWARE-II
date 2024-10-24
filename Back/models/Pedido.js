const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pedido = sequelize.define('Pedido', {
  ID_Pedido: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  ID_Usuario: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.ENUM('pendiente', 'completado'),
    defaultValue: 'pendiente',
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'Pedido',
  timestamps: false,
});

module.exports = Pedido;

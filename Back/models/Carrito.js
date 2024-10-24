const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Carrito = sequelize.define('Carrito', {
  ID_Carrito: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  ID_Pedido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ID_Producto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'Carrito',
  timestamps: false,
});

module.exports = Carrito;

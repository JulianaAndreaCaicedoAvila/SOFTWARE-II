const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const HistorialCompra = sequelize.define('HistorialCompra', {
  ID_HistorialCompra: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  ID_Pago: {
    type: DataTypes.STRING,
    allowNull: false,
  },
 
  ID_Usuario: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'HistorialCompra',
  timestamps: false,
});

module.exports = HistorialCompra;

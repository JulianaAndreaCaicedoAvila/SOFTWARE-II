const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pago = sequelize.define('Pago', {
  ID_Pago: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  ID_Carrito: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  monto: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  Medoto_Pago: { 
    type: DataTypes.ENUM('Tarjeta', 'Efectivo'),
    defaultValue: 'Tarjeta',
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'Pago',
  timestamps: false,
});

module.exports = Pago;

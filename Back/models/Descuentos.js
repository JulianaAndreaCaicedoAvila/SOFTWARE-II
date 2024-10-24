const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Descuento = sequelize.define('Descuento', {
  ID_Descuento: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.ENUM('Primera compra', 'Temporada'),
    defaultValue: 'Primera compra',
  },
  descuento: {
    type: DataTypes.ENUM('10%', '20%'),
    defaultValue: '10%',
  },
 
  fecha_creacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'Descuento',
  timestamps: false,
});

module.exports = Descuento;

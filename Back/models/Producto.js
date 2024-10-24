const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Inventario = require('./inventarioModel');

const Producto = sequelize.define('Producto', {
  id: { 
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  talla: {
    type: DataTypes.STRING,
  },
  color: {
    type: DataTypes.STRING,
  },
  imagen: {
    type: DataTypes.TEXT,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'productos',
});

Producto.hasOne(Inventario, { foreignKey: 'productoId', onDelete: 'CASCADE' });
Inventario.belongsTo(Producto, { foreignKey: 'productoId' });

module.exports = Producto;

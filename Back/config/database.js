const { Sequelize } = require('sequelize');

// Crear una conexión con la base de datos MySQL se tomo de Mamp mysql server/ apache server
const sequelize = new Sequelize('carrito_db', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306 
});
//Es para saber por consola si esta conectada
sequelize.authenticate()
  .then(() => {
    console.log('Conexión exitosa :)');
  })
  .catch((err) => {
    console.error('Error al conectar :(   :', err);
  });

module.exports = sequelize;

const Sequelize = require('sequelize');

const sequelize = new Sequelize('motores_gerdau', 'root', '', {
    dialect: 'mysql', 
    host: 'localhost' 
});

module.exports = sequelize;
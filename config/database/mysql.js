const Sequelize = require('sequelize');
const db = new Sequelize('kuliah', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = db;

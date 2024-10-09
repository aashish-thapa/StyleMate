const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('fashion_db', 'aashish-thapa', 'aashish',{
    host: 'localhost',
    dialect: 'mysql'
} )

module.exports = sequelize;
// models/Match.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('fashion_app', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const Match = sequelize.define('Match', {
  user1_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users', // The table to reference
      key: 'id' // The column to match
    }
  },
  user2_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  match_status: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Match;

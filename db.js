const {Sequelize, DataTypes, Model} = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password',{
    dialect: "sqlite",
    storage: './resaurants-seq.sqlite'
});

module.exports = {sequelize, DataTypes, Model}
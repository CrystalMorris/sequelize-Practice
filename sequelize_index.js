const {Sequelize, DataTypes, Model} = require('./db');

const{Restaurant} = require('./Restaurant');
const{Menu} = require('./Menu');
const{Items} = require('./Items');

Menu.belongsTo(Restaurant)
Restaurant.hasMany(Menu)

Items.belongsTo(Menu)
Menu.hasMany(Items)


module.exports = {Restaurant, Menu, Items};
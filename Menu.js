const {sequelize, DataTypes, Model} = require('./sequelize_index')

class Menu extends Model{


}
Menu.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING
},{
    sequelize,
    timestamps: false
})

module.exports = {Menu};
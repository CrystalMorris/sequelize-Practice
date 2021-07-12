const {sequelize, DataTypes, Model} = require('./sequelize_index')

class Items extends Model{


}
Items.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING
},{
    sequelize,
    timestamps: false
})

module.exports = {Items};
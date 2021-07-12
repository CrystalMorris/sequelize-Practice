const {sequelize, DataTypes, Model} = require('./db')

class Items extends Model{


}
Items.init({
    name: DataTypes.STRING
},{
    sequelize,
    timestamps: false
})

module.exports = {Items};
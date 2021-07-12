const {sequelize, DataTypes, Model} = require('./sequelize_index')

class Restaurant extends Model{


}
Restaurant.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING
},{
    sequelize,
    timestamps: false
})

module.exports = {Restaurant};
const {sequelize, DataTypes, Model} = require('./db')

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
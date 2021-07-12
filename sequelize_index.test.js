const {sequelize} = require('./sequelize_index');
const {Restaurant} = require("./Restaurant");
const {Menu} = require("./Menu");
const {Items} = require("./Items");

describe('Restaurant', () =>{
    beforeAll(async () =>{
        await sequelize.sync({force: true});
    })
  
    test('can create a restaurant', async()=>{
        const restaurant = await Restaurant.create({name: 'McDonalds', type: 'American/Fast Food'})
        expect(restaurant.id).toBe(1)
    })

    test('can create a menu', async()=>{
        const menu = await Menu.create({name: "Dinner", type: "Entres"})
        expect(menu.id).toBe(1)
    })

    test('can create an item', async()=>{
        const item = await Items.create({name: 'Chocolate Silk Pie', type: "Dessert"})
        expect(item.id).toBe(1)
    })
})
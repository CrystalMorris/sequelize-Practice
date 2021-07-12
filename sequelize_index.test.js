const {sequelize} = require('./db');
const {Restaurant,Menu, Items} = require('./sequelize_index');



describe('Restaurant', () =>{
    beforeAll(async () =>{
        await sequelize.sync({force: true});
    })
  
    test('can create a restaurant', async()=>{
        const restaurant = await Restaurant.create({name: 'McDonalds', type: 'American/Fast Food'})
        expect(restaurant.id).toBe(1)
    })

    test('can create a menu', async()=>{
        const dinner = await Menu.create({name: "Dinner", type: "Entres"})
        expect(dinner.id).toBe(1)
    })

    test('can create an item', async()=>{
        const chocSilkPie = await Items.create({name: 'Chocolate Silk Pie'})
        console.log(chocSilkPie);
        expect(chocSilkPie.id).toBe(1)
    })


    test('restaurants can have many menus', async ()=>{
        const leSnoote = await Restaurant.create({name: "Le Snoote", type : "Gourmet"})
        const brunch = await Menu.create({name: "Brunch", type:"Entres" })
        const eggsBenedict = await Items.create({name :" Caprese Eggs Benedict"})
        const dinner = await Menu.create({name : "Dinner", type: 'Entres'})

        await leSnoote.addMenu(brunch)
        await leSnoote.addMenu(dinner)
        await brunch.addItems(eggsBenedict)

        const snootyMenus = await leSnoote.getMenus()
        
        expect(snootyMenus.length).toBe(2)
        expect(snootyMenus[0] instanceof Menu).toBeTruthy



    })
})
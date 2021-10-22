const { Order } = require('../database/models')
const userController = require('./user.controller')
const productsController = require('./products.controller')

const ordersController = {
    getAll: async (req, res)=> {
        const orderList = await getAll();
        return orderList;
    },
    getAllByUser: async (req, res)=> {
        const email = await req.session.email

        let orderList 
        if (email) {
            const user = await userController.getUserByEmail(email)
            orderList = await getAllByUser(user.user_id);
        }
        return orderList;
    },
    getById: async (orderId)=> {
        let order = await getById(orderId)
        return order;
    },
    getByFilter: async (req, res)=> {
        const orderList = await getByFilter(req);
        return orderList;
    },
    save: async (req, res) => {
        const order = await save(req, res);
        return order;
    },
    update: async (req, res) => {
        const order = await update(req, res);
        return order;
    },
    remove: async (order_id) => {
        const remove_status = await remove(order_id)
        return remove_status
    },
    create: async (req, res) => {
        const order = await create(req, res);
        return order;
    }
}

async function getAll() {
    const orderList = await Order.findAll();
    return orderList
}

async function getAllByUser(user_id) {
    const orderList = await Order.findAll({where: {user_id}});
    return orderList
}

async function getById(id) {
    const order = await Order.findByPk(id)
    return order
}

async function save (req, res) {
    let { user_id, amount, /*payment_id,*/ order_status } = req.body;

    const order = {
        user_id, 
        amount,
        /*payment_id,*/
        order_status
    }

    const newOrder= await Order.create( order )
    if (newOrder instanceof Order) {
        return await getById(newOrder.order_id)
    } 
}

async function create (req, res) {
    const id = req.params.id
    const product = productsController.getById(id)

    const order = {
        user_id: 1, 
        amount: product.price,
        /*payment_id,*/
        order_status: 'C'
    }

    const newOrder= await Order.create( order )
    if (newOrder instanceof Order) {
        return await getById(newOrder.order_id)
    } 
}

async function update (req, res) {
    let { order_id, amount, /*payment_id,*/ order_status } = req.body;
    const thisOrder = await Order.findOne( {where:{ order_id: order_id}})

    // Updates the prod payload
    thisOrder.amount = amount
    /*thisOrder.payment_id = payment_id*/
    thisOrder.order_status = order_status

    const order = await thisOrder.save()
    return order
}

async function remove(order_id) {  
    Order.destroy({ where: {order_id: order_id}})
        .then(async function (rowRemoved){
            if(rowRemoved === 1) {
                try {
                    removeStatus.status = true
                    removeStatus.msg = 'Produto excluído com sucesso!'
                } catch (error) {
                    removeStatus.msg = `Erro ao excluir order: ${error}`
                } 
            }
        }, function(err) {
            removeStatus.msg = `Erro ao excluir order: ${err}`
    });
    return removeStatus
}

module.exports = ordersController;


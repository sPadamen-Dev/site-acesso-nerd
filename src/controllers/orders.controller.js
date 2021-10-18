const { Order } = require('../database/models')

const ordersController = {
    getAll: async (req, res)=> {
        const productList = await getAll();
        return productList;
    },
    getById: async (productId)=> {
        let product = await getById(productId)
        return product;
    },
    getByFilter: async (req, res)=> {
        const productList = await getByFilter(req);
        return productList;
    },
    save: async (req, res) => {
        const product = await save(req, res);
        return product;
    },
    update: async (req, res) => {
        const product = await update(req, res);
        return product;
    },
    remove: async (product_id) => {
        const remove_status = await remove(product_id)
        return remove_status
    }
}

async function getAll() {
    const orderList = await Order.findAll();
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


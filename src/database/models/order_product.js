'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Order,{
        foreignKey: 'order_id',
        required: true
      })

      this.belongsTo(models.Product,{
        foreignKey: 'product_id',
        required: true
      })
    }
  };
  Order_Product.init({
    order_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Order',
        key: 'order_id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product',
        key: 'product_id'
      }
    },
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Order_Product',
  });
  return Order_Product;
};
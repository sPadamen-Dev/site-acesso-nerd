'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders_Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Orders_Products.init({
    order_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Orders',
        key: 'order_id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product',
        key: 'product_id'
      }
    }
  }, {
    sequelize,
    modelName: 'Orders_Products',
  });
  return Orders_Products;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders_products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Orders_products.init({
    order_id:{
      type: DataTypes.INTEGER,
    },
    product_id:{
      type: DataTypes.INTEGER
    },
    sell_price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Orders_products',
  });
  return Orders_products;
};
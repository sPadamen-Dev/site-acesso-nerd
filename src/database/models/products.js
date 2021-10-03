'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Products.init({
    product_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    product_name: DataTypes.STRING,
    description: DataTypes.STRING,
    sell_price: DataTypes.FLOAT,
    installment_parts: DataTypes.INTEGER(2),
    installment_price: DataTypes.FLOAT(10, 2),
    product_status: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};
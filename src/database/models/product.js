'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Users, {through: "Favorites"})
      this.belongsToMany(models.Orders, {through: "Orders_products"})
    }
  };
  Product.init({
    product_id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.DECIMAL(10,2),
    installment_parts: DataTypes.INTEGER,
    installment_price: DataTypes.DECIMAL(10,2),
    imgPath: DataTypes.STRING,
    status: DataTypes.CHAR,
    one_size: DataTypes.CHAR,
    es_size: DataTypes.CHAR,
    s_size: DataTypes.CHAR,
    m_size: DataTypes.CHAR,
    l_size: DataTypes.CHAR,
    el_size: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
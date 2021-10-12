'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Products,{
        foreignKey: 'product_id',
        as: 'img_do_produto',
        required: true
      })
    }
  };
  Product_images.init({
    image_id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    product_id: DataTypes.INTEGER,
    image_type: DataTypes.CHAR(1),
    image_url: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Product_images',
  });
  return Product_images;
};
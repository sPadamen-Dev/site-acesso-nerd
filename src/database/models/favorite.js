'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User,{
        foreignKey: 'user_id',
        required: true
      })

      this.belongsTo(models.Product,{
        foreignKey: 'product_id',
        required: true
      })
    }
  };
  Favorite.init({
    favorite_id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'user_id'
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
    modelName: 'Favorite',
  });
  return Favorite;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Payment_details,{
        foreignKey: 'payment_id',
        required: false
      })

      this.hasOne(models.Users,{
        foreignKey: 'user_id',
        required: true
      })

      this.belongsToMany(models.Product, { through: 'Order_Product' });
    
    }
  };
  Order.init({
    order_id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user_id:{
      type: DataTypes.INTEGER
    },
    amount: DataTypes.FLOAT,
    payment_id: DataTypes.INTEGER,
    order_status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
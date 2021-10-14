'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Credit_cards,{
        foreignKey: 'user_id',
        as: 'card_details_payment',
        required: true
      })
      
      this.belongsTo(models.Order,{
        foreignKey: 'payment_details',
        as: 'order_payment',
        required: true
      })
    }
  };
  Payment_details.init({
    payment_id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    card_id:{
      type: DataTypes.INTEGER
    },
    payment_method: DataTypes.INTEGER,
    amount: DataTypes.FLOAT,
    installment_parts: DataTypes.INTEGER,
    installment_value: DataTypes.FLOAT,
    payment_status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Payment_details',
  });
  return Payment_details;
};
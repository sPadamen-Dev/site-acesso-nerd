'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.hasMany(models.Payment_details,{
        foreignKey: 'payment_id',
        as: 'payments_order'
      })

      this.belongsTo(models.Users,{
        foreignKey: 'user_id',
        as: 'ordem_do_usuario',
        required: true
      })

    }
  };
  Orders.init({
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
    modelName: 'Orders',
  });
  return Orders;
};
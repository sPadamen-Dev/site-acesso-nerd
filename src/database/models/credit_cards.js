'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Credit_cards extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Credit_cards,{
        foreignKey: 'user_id',
        as: 'user_card',
        required: true
      })

    }
  };
  Credit_cards.init({
    card_id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user_id:{
      type: DataTypes.INTEGER
    },
    card_company: DataTypes.STRING,
    cardholder_name: DataTypes.STRING,
    card_number: DataTypes.STRING,
    expiration_date: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Credit_cards',
  });
  return Credit_cards;
};
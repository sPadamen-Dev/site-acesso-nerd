'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User,{
        foreignKey: 'user_id',
        as: 'user_address',
        required: true
      })
    }
  };
  Address.init({
    address_id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user_id:{
      type: DataTypes.INTEGER
    },
    address_type: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    additional_info: DataTypes.INTEGER,
    district: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    address_status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Address',
    timestamps:true,
  });
  return Address;
};
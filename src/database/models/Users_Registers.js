'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users_Registers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Users_Registers.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthDate: DataTypes.STRING,
    address: DataTypes.STRING,
    number: DataTypes.STRING,
    district: DataTypes.STRING,
    cep: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    email: DataTypes.STRING, 
    telephone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users_Registers',
    freezeTableName: true,
  });
  return Users_Registers;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Table_register extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Table_register.init({
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
    modelName: 'Table_register',
    freezeTableName: true,
  });
  return Table_register;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Administrator extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Administrator.init({
    admin_id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user: DataTypes.STRING,
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
    imgPath: DataTypes.STRING,
    password: DataTypes.STRING,
    status: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'Administrator',
  });
  return Administrator;
};
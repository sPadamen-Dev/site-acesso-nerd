'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Addresses,{
        foreignKey: 'user_id',
        as: 'address'
      })
    }
  };
  Users.init({
    user_id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user_name: DataTypes.STRING,
    birth_date: DataTypes.STRING,
    gender: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING,
    password: DataTypes.STRING,
    user_status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Users',
    timestamps:true,
  });
  return Users;
};
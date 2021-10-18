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
        foreignKey: 'address_id',
      })

      this.hasMany(models.Credit_cards,{
        foreignKey: 'card_id',
      })

      this.hasMany(models.Order,{
        foreignKey: 'order_id',
      })

      this.belongsToMany( models.Product, { through: 'Favorites' });
    }
  };
  Users.init({
    user_id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    userEmail: DataTypes.STRING,
    senha: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    cpf: DataTypes.STRING,
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
    modelName: 'Users',
    timestamps:true,
  });
  return Users;
};
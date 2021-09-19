'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Administrators', {
      admin_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user: {
        type: Sequelize.STRING,
        allowNull:false
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull:false
      },
      email: {
        type: Sequelize.STRING,
        allowNull:false
      },
      imgPath: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING,
        allowNull:false
      },
      status: {
        type: Sequelize.CHAR,
        allowNull:false,
        defaultValue: 'A'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Administrators');
  }
};
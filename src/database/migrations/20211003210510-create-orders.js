'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      order_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'User',
          key: 'user_id'
       }
      },
      amount: {
        type: Sequelize.FLOAT
      },
      payment_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Payment_details',
          key: 'payment_id'
       }
      },
      order_status: {
        type: Sequelize.CHAR(1),
        allowNull:false,
        defaultValue: 'S'
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  }
};
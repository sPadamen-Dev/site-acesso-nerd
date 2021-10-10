'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      product_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL(10,2)
      },
      installment_parts: {
        type: Sequelize.INTEGER
      },
      installment_price: {
        type: Sequelize.DECIMAL(10,2)
      },
      imgPath: {
        type: Sequelize.STRING
      },
      one_size: {
        type: Sequelize.CHAR,
        allowNull:false,
        defaultValue: 'S'
      },
      es_size: {
        type: Sequelize.CHAR,
        allowNull:true,
        defaultValue: 'S'
      },
      s_size: {
        type: Sequelize.CHAR,
        allowNull:true,
        defaultValue: 'S'
      },
      m_size: {
        type: Sequelize.CHAR,
        allowNull:true,
        defaultValue: 'S'
      },
      l_size: {
        type: Sequelize.CHAR,
        allowNull:true,
        defaultValue: 'S'
      },
      el_size: {
        type: Sequelize.CHAR,
        allowNull:true,
        defaultValue: 'S'
      },
      status: {
        type: Sequelize.CHAR,
        allowNull:false,
        defaultValue: 'A'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};
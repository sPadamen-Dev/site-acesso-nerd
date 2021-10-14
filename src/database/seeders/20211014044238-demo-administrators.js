'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('administrators', [
       { user: 'gilvan.rios' , name: 'Gilvan Rios', cpf: '11111111111' , email: 'gilvan.rios@gmail.com', imgPath: null, password: '$2a$10$aB4bPBTLdTBfg/lkhWN4r.pUo93sF/AG2RYqqTIkwRSonX1Z1kE2i', status: 'A', createdAt: Sequelize.fn('NOW') , updatedAt: Sequelize.fn('NOW')},
       { user: 'rayssa.coutinho' , name: 'Rayssa Coutinho', cpf: '22222222222' , email: 'rayssa.coutinho@gmail.com', imgPath: null, password: '$2a$10$fnkm6kds1fbWFKx2xxX0AeOyOx28jQ2rOwMpCWQ0pOgu9q6jH9NMK', status: 'A', createdAt: Sequelize.fn('NOW') , updatedAt: Sequelize.fn('NOW')},
       { user: 'william.xavier' , name: 'William Xavier', cpf: '33333333333' , email: 'willxis@gmail.com', imgPath: null, password: '$2a$10$IIp9TbvkhZ5ptNOel7WnNORkLtIcWJb.XX0HEwfhl6loijYWM6yoq', status: 'A', createdAt: Sequelize.fn('NOW') , updatedAt: Sequelize.fn('NOW')},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('administrators', null, {});
  }
};

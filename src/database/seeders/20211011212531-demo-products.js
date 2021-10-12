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
     await queryInterface.bulkInsert('products', [
      {category: 'Camisetas', name: 'CAMISETA BRANCA ALICE NO PAÍS DAS MARAVILHAS', description:'Tecido: 100% algodão • Cor: Branca • Costuras reforçadas no colarinho e ombros Sobre a Estampa', imgPath: '/img/products/alice-in-wonderland.png', installment_parts: 5, installment_price: 10.18, price: 50.90, one_size: 'N', es_size: 'S', s_size: 'S', m_size: 'S', l_size: 'S', el_size: 'S', status: 'Inativo', createdAt: Sequelize.fn('NOW') , updatedAt: Sequelize.fn('NOW')},
      {category: 'Camisetas',name: 'CAMISETA BRANCA DARTH VADER', description:'Tecido: 100% algodão • Cor: Branca • Costuras reforçadas no colarinho e ombros Sobre a Estampa', imgPath: '/img/products/darth-vader.png', installment_parts: 5, installment_price: 10.18, price: 50.90, one_size: 'N', es_size: 'S', s_size: 'S', m_size: 'S', l_size: 'S', el_size: 'S', status: 'Ativo', createdAt: Sequelize.fn('NOW') , updatedAt: Sequelize.fn('NOW')},
      {category: 'Camisetas',name: 'CAMISETA BRANCA O REI LEÃO - SIMBA', description:'Tecido: 100% algodão • Cor: Branca • Costuras reforçadas no colarinho e ombros Sobre a Estampa', imgPath: '/img/products/lion-king-simba.png', installment_parts: 5, installment_price: 10.18, price: 50.90, one_size: 'N', es_size: 'S', s_size: 'S', m_size: 'S', l_size: 'S', el_size: 'N', status: 'Ativo', createdAt: Sequelize.fn('NOW') , updatedAt: Sequelize.fn('NOW')},
      {category: 'Camisetas',name: 'CAMISETA BRANCA MADALORIAN - GROGU', description:'Tecido: 100% algodão • Cor: Branca • Costuras reforçadas no colarinho e ombros Sobre a Estampa', imgPath: '/img/products/madalorian-grogu.png', installment_parts: 5, installment_price: 10.18, price: 50.90, one_size: 'N', es_size: 'S', s_size: 'S', m_size: 'S', l_size: 'N', el_size: 'N', status: 'Ativo', createdAt: Sequelize.fn('NOW') , updatedAt: Sequelize.fn('NOW')},
      {category: 'Camisetas',name: 'CAMISETA BRANCA TOY STORY - FORKY', description:'Tecido: 100% algodão • Cor: Branca • Costuras reforçadas no colarinho e ombros Sobre a Estampa', imgPath: '/img/products/toy-story-forky.png', installment_parts: 5, installment_price: 10.18, price: 50.90, one_size: 'N', es_size: 'S', s_size: 'S', m_size: 'N', l_size: 'N', el_size: 'N', status: 'Ativo', createdAt: Sequelize.fn('NOW') , updatedAt: Sequelize.fn('NOW')},
      {category: 'Camisetas',name: 'CAMISETA BRANCA TOY STORY - WOODY', description:'Tecido: 100% algodão • Cor: Branca • Costuras reforçadas no colarinho e ombros Sobre a Estampa', imgPath: '/img/products/toy-story-woody.png', installment_parts: 5, installment_price: 10.18, price: 50.90, one_size: 'N', es_size: 'S', s_size: 'N', m_size: 'N', l_size: 'N', el_size: 'N', status: 'Ativo', createdAt: Sequelize.fn('NOW') , updatedAt: Sequelize.fn('NOW')},
      {category: 'Camisetas',name: 'CAMISETA BRANCA DEADPOOL & VENOM', description:'Tecido: 100% algodão • Cor: Branca • Costuras reforçadas no colarinho e ombros Sobre a Estampa', imgPath: '/img/products/deadpool-venom.png', installment_parts: 5, installment_price: 13.25, price: 66.25, one_size: 'N', es_size: 'S', s_size: 'S', m_size: 'S', l_size: 'S', el_size: 'S', status: 'Ativo', createdAt: Sequelize.fn('NOW') , updatedAt: Sequelize.fn('NOW')},
      {category: 'Camisetas',name: 'CAMISETA BRANCA MANOPLA DO INFINITO', description:'Tecido: 100% algodão • Cor: Branca • Costuras reforçadas no colarinho e ombros Sobre a Estampa', imgPath: '/img/products/manopla-do-infinito.png', installment_parts: 5, installment_price: 13.25, price: 66.25, one_size: 'N', es_size: 'S', s_size: 'S', m_size: 'S', l_size: 'S', el_size: 'S', status: 'Ativo', createdAt: Sequelize.fn('NOW') , updatedAt: Sequelize.fn('NOW')},
      {category: 'Camisetas',name: 'CAMISETA BRANCA HOMEM-ARANHA', description:'Tecido: 100% algodão • Cor: Branca • Costuras reforçadas no colarinho e ombros Sobre a Estampa', imgPath: '/img/products/spider-man.png', installment_parts: 5, installment_price: 13.25, price: 66.25, one_size: 'N', es_size: 'S', s_size: 'S', m_size: 'S', l_size: 'S', el_size: 'S', status: 'Ativo', createdAt: Sequelize.fn('NOW') , updatedAt: Sequelize.fn('NOW')},
      {category: 'Camisetas',name: 'CAMISETA BRANCA MARVEL - STAN LEE', description:'Tecido: 100% algodão • Cor: Branca • Costuras reforçadas no colarinho e ombros Sobre a Estampa', imgPath: '/img/products/stan-lee.png', installment_parts: 5, installment_price: 13.25, price: 66.25, one_size: 'N', es_size: 'S', s_size: 'S', m_size: 'S', l_size: 'S', el_size: 'S', status: 'Ativo', createdAt: Sequelize.fn('NOW') , updatedAt: Sequelize.fn('NOW')},
      {category: 'Camisetas',name: 'CAMISETA BRANCA THANOS', description:'Tecido: 100% algodão • Cor: Branca • Costuras reforçadas no colarinho e ombros Sobre a Estampa', imgPath: '/img/products/thanos.png', installment_parts: 5, installment_price: 13.25, price: 66.25, one_size: 'N', es_size: 'S', s_size: 'S', m_size: 'S', l_size: 'S', el_size: 'S', status: 'Ativo', createdAt: Sequelize.fn('NOW') , updatedAt: Sequelize.fn('NOW')},
      {category: 'Canecas', name: 'CANECA BRANCA DEADPOOL & VENOM', description:'Material: cerâmica resinada • Cor: Branca • Tamanho: 9,5 cm altura | 8 cm diâmetro', imgPath: '/img/products/c-deadpool-venom.png', installment_parts: 5, installment_price: 6.48, price: 32.40, one_size: 'S', es_size: null, s_size: null, m_size: null, l_size: null, el_size: null, status: 'Ativo', createdAt: Sequelize.fn('NOW') , updatedAt: Sequelize.fn('NOW')},
      {category: 'Canecas', name: 'CANECA BRANCA MANOPLA DO INFINITO', description:'Material: cerâmica resinada • Cor: Branca • Tamanho: 9,5 cm altura | 8 cm diâmetro', imgPath: '/img/products/c-manopla-do-infinito.png', installment_parts: 5, installment_price: 6.48, price: 32.40, one_size: 'S', es_size: null, s_size: null, m_size: null, l_size: null, el_size: null, status: 'Ativo', createdAt: Sequelize.fn('NOW') , updatedAt: Sequelize.fn('NOW')},
      {category: 'Canecas', name: 'CANECA BRANCA HOMEM-ARANHA', description:'Material: cerâmica resinada • Cor: Branca • Tamanho: 9,5 cm altura | 8 cm diâmetro', imgPath: '/img/products/c-spider-man.png', installment_parts: 5, installment_price: 6.48, price: 32.40, one_size: 'S', es_size: null, s_size: null, m_size: null, l_size: null, el_size: null, status: 'Ativo', createdAt: Sequelize.fn('NOW') , updatedAt: Sequelize.fn('NOW')},
      {category: 'Canecas', name: 'CANECA BRANCA MARVEL - STAN LEE', description:'Material: cerâmica resinada • Cor: Branca • Tamanho: 9,5 cm altura | 8 cm diâmetro', imgPath: '/img/products/c-stan-lee.png', installment_parts: 5, installment_price: 6.48, price: 32.40, one_size: 'S', es_size: null, s_size: null, m_size: null, l_size: null, el_size: null, status: 'Ativo', createdAt: Sequelize.fn('NOW') , updatedAt: Sequelize.fn('NOW')},
      {category: 'Canecas', name: 'CANECA BRANCA ALICE NO PAÍS DAS MARAVILHAS', description:'Material: cerâmica resinada • Cor: Branca • Tamanho: 9,5 cm altura | 8 cm diâmetro', imgPath: '/img/products/c-alice-in-wonderland.png', installment_parts: 5, installment_price: 6.48, price: 32.40, one_size: 'S', es_size: null, s_size: null, m_size: null, l_size: null, el_size: null, status: 'Ativo', createdAt: Sequelize.fn('NOW') , updatedAt: Sequelize.fn('NOW')},
      {category: 'Canecas', name: 'CANECA BRANCA DARTH VADER', description:'Material: cerâmica resinada • Cor: Branca • Tamanho: 9,5 cm altura | 8 cm diâmetro', imgPath: '/img/products/c-darth-vader.png', installment_parts: 5, installment_price: 6.48, price: 32.40, one_size: 'S', es_size: null, s_size: null, m_size: null, l_size: null, el_size: null, status: 'Ativo', createdAt: Sequelize.fn('NOW') , updatedAt: Sequelize.fn('NOW')},
      {category: 'Canecas', name: 'CANECA BRANCA O REI LEÃO - SIMBA', description:'Material: cerâmica resinada • Cor: Branca • Tamanho: 9,5 cm altura | 8 cm diâmetro', imgPath: '/img/products/c-lion-king-simba.png', installment_parts: 5, installment_price: 6.48, price: 32.40, one_size: 'S', es_size: null, s_size: null, m_size: null, l_size: null, el_size: null, status: 'Ativo', createdAt: Sequelize.fn('NOW') , updatedAt: Sequelize.fn('NOW')},
      {category: 'Canecas', name: 'CANECA BRANCA MANDALORIAN - GROGU', description:'Material: cerâmica resinada • Cor: Branca • Tamanho: 9,5 cm altura | 8 cm diâmetro', imgPath: '/img/products/c-mandalorian-grogu.png', installment_parts: 5, installment_price: 6.48, price: 32.40, one_size: 'S', es_size: null, s_size: null, m_size: null, l_size: null, el_size: null, status: 'Ativo', createdAt: Sequelize.fn('NOW') , updatedAt: Sequelize.fn('NOW')},
      {category: 'Canecas', name: 'CANECA BRANCA TOY STORY - WOODY', description:'Material: cerâmica resinada • Cor: Branca • Tamanho: 9,5 cm altura | 8 cm diâmetro', imgPath: '/img/products/c-toy-story-woody.png', installment_parts: 5, installment_price: 6.48, price: 32.40, one_size: 'S', es_size: null, s_size: null, m_size: null, l_size: null, el_size: null, status: 'Ativo', createdAt: Sequelize.fn('NOW') , updatedAt: Sequelize.fn('NOW')}
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('products', null, {});
  }
};

const router = require('express').Router();
const carrinhoController = require('../controllers/carrinho.controller');


router.get('/', carrinhoController.listAll);


module.exports = router;
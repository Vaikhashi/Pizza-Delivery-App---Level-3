const express = require('express');
const router = express.Router();
const pizzaController = require('../controllers/pizzaController');

// Get all pizzas
router.get('/', pizzaController.getPizzas);

// Place an order
router.post('/order', pizzaController.placeOrder);

module.exports = router;


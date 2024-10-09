const Pizza = require('../models/pizza'); // Import the Pizza model

// Get all pizzas
exports.getPizzas = async (req, res) => {
    try {
        const pizzas = await Pizza.find();
        res.status(200).json(pizzas);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching pizzas', error: err.message });
    }
};

// Place an order
exports.placeOrder = async (req, res) => {
    const { pizza, quantity } = req.body;

    try {
        // Logic to place the order, e.g., save to database or process payment
        res.status(201).json({ message: 'Order placed successfully!', pizza, quantity });
    } catch (err) {
        res.status(500).json({ message: 'Error placing order', error: err.message });
    }
};

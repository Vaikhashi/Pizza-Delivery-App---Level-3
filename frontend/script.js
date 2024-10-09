// Sample data for pizzas (could be fetched from the backend in the future)
const pizzas = [
    { name: "Margherita", price: 10 },
    { name: "Pepperoni", price: 12 },
    { name: "Veggie", price: 11 }
];

document.addEventListener("DOMContentLoaded", () => {
    const pizzaMenu = document.querySelector(".pizza-menu");
    pizzas.forEach(pizza => {
        const pizzaCard = document.createElement("div");
        pizzaCard.innerHTML = `<h3>${pizza.name}</h3><p>Price: $${pizza.price}</p>`;
        pizzaMenu.appendChild(pizzaCard);
    });
});

// Function to login user
async function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (response.ok) {
            alert('Login successful!');
            // Redirect to another page or do something with the response
        } else {
            alert(data.message || 'Login failed!');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error logging in!');
    }
}

// Function to sign up new user
async function signup(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });

        const data = await response.json();
        if (response.ok) {
            alert('Signup successful! Please log in.');
            // Redirect to login page or do something with the response
        } else {
            alert(data.message || 'Signup failed!');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error signing up!');
    }
}

// Function to place an order
async function placeOrder(event) {
    event.preventDefault();
    const pizzaSelection = document.getElementById('pizzaSelection').value;
    const quantity = document.getElementById('quantity').value;

    try {
        const response = await fetch('/api/pizzas/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ pizza: pizzaSelection, quantity }),
        });

        const data = await response.json();
        if (response.ok) {
            alert('Order placed successfully!');
            // Redirect or update UI accordingly
        } else {
            alert(data.message || 'Order failed!');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error placing order!');
    }
}


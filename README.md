# Pizza Delivery App

A small pizza ordering app: sign up, log in, look at the menu and place an order.

Backend is Node.js and Express with MongoDB (Mongoose). The front end is plain HTML, CSS and JavaScript in `frontend/`.

## API

| Method | Path | What it does |
| --- | --- | --- |
| POST | `/api/auth/signup` | creates a user, password hashed with bcrypt |
| POST | `/api/auth/login` | checks the password and returns a JWT (1 hour) |
| GET | `/api/pizzas` | lists pizzas from the database |
| POST | `/api/pizzas/order` | takes a pizza and a quantity and confirms the order |

## Running it

```bash
npm install
```

Create a `.env` file:

```
MONGO_URI=mongodb://127.0.0.1:27017/pizza
JWT_SECRET=anything-long-and-random
```

Then:

```bash
npm start   # runs on http://localhost:5000
```

## Next steps

- Save orders to the database instead of only confirming them.
- Load the menu from `/api/pizzas` on the front end (it's hard-coded right now).
- Add an order history page.

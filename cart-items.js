// separate the cart-items endpoint into its own file
const express = require("express");
const cart = express.Router();

// logic for our endpoints (server.js)
const cartItems = [
  { id: 1, product: "smoothie", price: 5, quantity: 2 },
  { id: 2, product: "sandwich", price: 7, quantity: 2 },
  { id: 3, product: "chips", price: 2, quantity: 1 },
  { id: 4, product: "chocolate", price: 3, quantity: 1 },
  { id: 5, product: "water", price: 1, quantity: 2 },
];

// Endpoint 1 - Array
app.get("/cart-items", (req, res) => {
  res.send([1, 2, 3, 4, 5]);
  console.log(req.query.maxPrice);
});

// Endpoint 2 - Item with ID
app.get("/cart-items/:id", (req, res) => {
  res.send(req.params, id);
});

// Endpoint 3 - Add
app.post("/cart-items", (req, res) => {
  res.send();
});

// Endpoint 4  - Update
app.put("/cart-items/:id", (req, res) => {
  res.send(req.params, id);
});

// Endpoint 5 - Delete
cart.delete("/cart-items/:id", (req, res) => {
  cart.splice(index, 1);
  res.json("Removing item from cart..");
});

module.exports = cart;

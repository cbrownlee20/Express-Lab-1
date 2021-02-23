const express = require('express');

const cart = require('./cart-items');

const app = express();

app.use(express.json());

const port = 3000;

app.use("/car.items/", cart);

app.listen(port, () => console.log(`Listening on port: ${port}.`));
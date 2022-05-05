const express = require('express');
const app = express();
const productsController = require('../Controllers/products');
const bodyParser = require('body-parser');

app.use(bodyParser.json([]));

app.post('/products', productsController.createAllProducts);
app.get('/products', productsController.getAllProducts);

module.exports = app;
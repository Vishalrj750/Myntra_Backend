const productModel = require('../Models/products');

async function getAllProducts(req, res, next) {
    const response = await productModel.find({});
    res.json(response);
}

async function createAllProducts(req, res, next) {
    const body = req.body;
    const response = await productModel.insertMany(body);
    res.json(response);
}

module.exports = {
    getAllProducts,
    createAllProducts
}
const productModel = require('../Models/products');

async function getAllProducts(req, res, next) {
    const response = await productModel.find({});
    res.json(response);
} 

module.exports = {
    getAllProducts
}
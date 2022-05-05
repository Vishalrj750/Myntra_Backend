const mongoose = require('mongoose');

const product = new mongoose.Schema({
            "id": { type: Number, required: true },
            "categories": { type: String, required: true },
            "size": { type: String, required: true },
            "title": { type: String, required: true },
            "price": { type: Number, required: true },
            "gender": { type: String, required: true },
            "description": { type: String, required: true },
            "brand": { type: String, required: true },
            "color": { type: String },
            "discount": { type: Number, required: true },
            "off_price": { type: Number, required: true },
            "images": {
                "image1": { type: String, required: true },
                "image2": { type: String, required: true },
                "image3": { type: String, required: true },
                "image4": { type: String, required: true }
            },
            "rating": { type: Number, required: true },
            "count": { type: Number, required: true }
});

module.exports = mongoose.model('product', product);
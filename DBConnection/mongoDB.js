const mongoose = require('mongoose');

class mongo {

    constructor() {
        this.connectToMongoDB()
    }

    connectToMongoDB() {
        mongoose.connect('mongodb://localhost:27017/myntra');
        mongoose.connection.once('open', () => {
            console.log('MongoDB connection successful');
        });
        mongoose.connection.on('error', () => {
            console.log('Some error occured in mongoDB connection');
        });
    }
}

module.exports = mongo;
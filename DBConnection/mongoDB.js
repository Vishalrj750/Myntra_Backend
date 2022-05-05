const mongoose = require('mongoose');

class mongo {

    constructor() {
        this.connectToMongoDB()
    }

    connectToMongoDB() {
        mongoose.connect('mongodb+srv://vishal:vishal12345@cluster0.mjbw6.mongodb.net/test');
        mongoose.connection.once('open', () => {
            console.log('MongoDB connection successful');
        });
        mongoose.connection.on('error', () => {
            console.log('Some error occured in mongoDB connection');
        });
    }
}

module.exports = mongo;
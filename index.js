const http = require('http');
const app = require('./Routes/products');
const connectToDB = require('./DBConnection/mongoDB');
const PORT = 9008;

http.createServer(app).listen(PORT, () => {
    new connectToDB();
    console.log(`Server is running on port ${PORT}`);
});
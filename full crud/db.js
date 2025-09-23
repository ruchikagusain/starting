// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/mydatabase')
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error(err));

const mongoose = require('mongoose')

async function connectDB() {
    try {
        const url = process.env.MONGO_URI;
        console.log('url: ', url);
        await mongoose.connect(url);
        console.log('MongoDB connected');
    }
    catch (error) {
        console.log("connection error", error)
    }
}

module.exports = connectDB;

// Define your schema and model
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: Number,
    phoneNumber: Number,
});

const User = mongoose.model('User', userSchema);


module.exports = User;


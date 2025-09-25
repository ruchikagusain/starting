
require('dotenv').config();


const express = require('express')
const mongoose = require('mongoose')
const connectDB = require('./db')
const User = require('./userSchema')



const app = express();
app.use(express.json()); // Parse JSON request bodies


//module.exports = User

// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/mydatabase')
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error(err));

// Define your schema and model
// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   age: Number,
//   phoneNumber : Number,
// });

// const User = mongoose.model('User', userSchema);

// Create user - POST /users
app.post('/users', async (req, res) => {
  try {
    const newUser = new User(req.body); // create a new user from request body
    const savedUser = await newUser.save(); // save to DB

    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});



// Get all users - GET /users
app.get('/users', async (req, res) => {
  // const users = await User.find({},{name:1,age:1})
  // const users = await User.find({ age: { $gte: 20 } })
 // const users = await User.find().sort({name:-1})
 //const users = await User.find().limit(2).skip(1)
 const users = await User.aggregate([
  {
    $match:{
      age:{$gte:20},
      
    }
  },
  {
    $limit : 2
  },
  {
    $sort: {
      age: -1
    }
  }
 ])

  res.json(users);
});


// Get a user by ID - GET /users/:id
app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
})

// Update user by ID - PUT /users/:id
app.put('/users/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedUser) return res.status(404).json({ error: 'User not found' });
    res.json(updatedUser)
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete user by ID - DELETE /users/:id
app.delete('/users/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Start server
app.listen(3000, () => console.log('Server running on port 3000'));
connectDB()



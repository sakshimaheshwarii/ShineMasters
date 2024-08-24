// app.js (Server-side code)
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the public directory

// Connect to MongoDB
mongoose.connect('mongodb+srv://maheshwarisakshi03:Sakshi%40123@cluster0.jrys2c2.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

// Define a schema and model for User
const userSchema = new mongoose.Schema({
    name: String,
    email: String
});

const User = mongoose.model('User', userSchema);

// Update profile endpoint
app.post('/update-profile', async (req, res) => {
    const { name, email } = req.body;

    try {
        // Assuming you have user authentication and have the user ID
        const user = await User.findMany(); // Update as necessary to find the specific user
        if (user) {
            user.name = name;
            user.email = email;
            await user.save();
            res.status(200).send('Profile updated successfully');
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

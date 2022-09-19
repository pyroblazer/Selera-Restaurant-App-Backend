const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const restaurantSchema = new mongoose.Schema({
  id: String,
  pictureId: String,
  name: String,
  city: String,
  rating: Number,
  description: String,
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

app.get("/", (req, res) => {
  res.send("Express OK");
});

// GET all restaurants
app.get('/restaurants', async (req, res) => {
    try {
      const restaurants = await Restaurant.find();
      res.send(restaurants);
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

// GET restaurant by ID
app.get('/restaurants/:id', async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (restaurant) {
      res.json(restaurant);
    } else {
      res.status(404).json({ error: 'Restaurant not found' });
    }
  } catch (error) {
    console.error('Error fetching restaurant by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST a new restaurant
app.post('/restaurants', async (req, res) => {
  try {
    const { id, pictureId, name, city, rating, description } = req.body;
    const newRestaurant = new Restaurant({ id, pictureId, name, city, rating, description });
    await newRestaurant.save();
    res.status(201).json(newRestaurant);
  } catch (error) {
    console.error('Error creating new restaurant:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

module.exports = app;

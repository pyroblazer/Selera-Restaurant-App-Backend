import { Request, Response } from 'express';
import Restaurant, { IRestaurant } from '../models/restaurantModel';

export async function getAllRestaurants(req: Request, res: Response): Promise<void> {
  try {
    const restaurants: IRestaurant[] = await Restaurant.find();
    res.send(restaurants);
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function getRestaurantById(req: Request, res: Response): Promise<void> {
  try {
    const restaurant: IRestaurant | null = await Restaurant.findById(req.params.id);
    if (restaurant) {
      res.json(restaurant);
    } else {
      res.status(404).json({ error: 'Restaurant not found' });
    }
  } catch (error) {
    console.error('Error fetching restaurant by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function createRestaurant(req: Request, res: Response): Promise<void> {
  try {
    const { id, pictureId, name, city, rating, description }: IRestaurant = req.body;
    const newRestaurant: IRestaurant = new Restaurant({ id, pictureId, name, city, rating, description });
    await newRestaurant.save();
    res.status(201).json(newRestaurant);
  } catch (error) {
    console.error('Error creating new restaurant:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

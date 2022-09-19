import mongoose, { Document, Model } from 'mongoose';
import { IRestaurant } from '../generals/constants';

export interface IRestaurant extends Document {
  id: string;
  pictureId: string;
  name: string;
  city: string;
  rating: number;
  description: string;
}

const restaurantSchema = new mongoose.Schema<IRestaurant>({
  id: String,
  pictureId: String,
  name: String,
  city: String,
  rating: Number,
  description: String,
});

const Restaurant: Model<IRestaurant> = mongoose.model('Restaurant', restaurantSchema);

export default Restaurant;

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import restaurantRoutes from './routes/restaurantRoutes';
import { PORT, MONGODB_URI } from './generals/constants';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/restaurants', restaurantRoutes);

app.get("/", (req, res) => {
  res.send("Express OK");
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}.`);
});

export default app;
import request from 'supertest';
import app from '../app';

describe('Restaurant Routes', () => {
  it('should get all restaurants', async () => {
    const response = await request(app).get('/restaurants');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });

  it('should get a restaurant by ID', async () => {
    const response = await request(app).get('/restaurants/123'); // Replace '123' with a valid restaurant ID
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });

  it('should create a new restaurant', async () => {
    const newRestaurant = {
      id: '456',
      name: 'New Restaurant',
      city: 'New City',
      rating: 4.5,
      description: 'A new restaurant for testing'
    };

    const response = await request(app)
      .post('/restaurants')
      .send(newRestaurant);

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(newRestaurant);
  });
});

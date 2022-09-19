# Selera Restaurant App Backend

Welcome to the Selera Restaurant App Backend repository! This backend server is designed to complement the frontend application, providing a seamless experience for users exploring restaurant options and reviews. The associated frontend repository can be found [here](https://github.com/pyroblazer/Selera-Restaurant-App-Progressive-Web-App).

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/pyroblazer/selera-restaurant-app-backend.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Create a `.env` file in the root directory and provide your MongoDB connection URI:
   ```env
   MONGODB_URI=<your_mongodb_connection_uri>
   ```

2. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

- **GET /restaurants**: Retrieve a list of restaurants.

## Environment Variables

- **MONGODB_URI**: MongoDB connection URI.

## Dependencies

- [cors](https://www.npmjs.com/package/cors) - Enable CORS in Express.
- [dotenv](https://www.npmjs.com/package/dotenv) - Load environment variables.
- [express](https://www.npmjs.com/package/express) - Web framework for Node.js.
- [mongoose](https://www.npmjs.com/package/mongoose) - MongoDB object modeling tool.

## Contributing

Feel free to contribute to the project. Fork the repository, make your changes, and submit a pull request.
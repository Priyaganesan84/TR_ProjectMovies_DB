// app.ts

import express from 'express';
import sequelize from './config/sequelize'; // Import Sequelize instance
import mediaRoutes from './routes/MediaRoutes';
import Media from './models/Media'; // Define Models



const app = express();
const port = 3000;


// Middleware for handling JSON requests
app.use(express.json());

// Use the mediaRoutes
app.use('/api', mediaRoutes);

// Log to check if sequelize is imported successfully
console.log('sequelize:', sequelize);

// Sync Sequelize models with the database and start the server
sequelize
  .sync()
  .then(() => {
    console.log('Connected to the database and synced models');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
    process.exit(1); // Exit the app if the database connection fails
  });

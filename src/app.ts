// app.ts

import express from 'express';
import sequelize from './config/sequelize'; // Import Sequelize instance
import mediaRoutes from './routes/MediaRoutes';
import Media from './models/Media'; // Define Models
import axios from 'axios';



const app = express();
const port = 3000;


// Middleware for handling JSON requests
app.use(express.json());

// Use the mediaRoutes
app.use('/api', mediaRoutes);

// Log to check if sequelize is imported successfully
console.log('sequelize:', sequelize);

// Fetch and populate data from the TMDb API
const fetchAndPopulateData = async () => {
  try {
    // Fetch data from the TMDb API
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/all/day',
      {
        params: {
          api_key: 'e3d88280951ffe3f19645fc48cc2d594' , // 'YOUR_API_KEY_HERE', // Replace with your TMDb API key
        },
      }
    );

    const mediaData = response.data.results;

    // Insert data into the database using Sequelize
    for (const media of mediaData) {
      await Media.create({
        id:media.id,
        title: media.title || media.name,
        media_type: media.media_type,
        release_date: media.first_air_date || media.release_date,
        poster_path: media.poster_path,
        vote_average: media.vote_average,
      });
    }

    console.log('Data has been populated into the database');
  } catch (error) {
    console.error('Error fetching and populating data:', error);
  }
};



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

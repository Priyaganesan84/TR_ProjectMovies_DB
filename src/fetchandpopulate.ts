// fetchAndPopulate.ts
import axios from 'axios';
import { Client } from 'pg';

const dbConfig = {
  user: 'postgres',
  password: 'password',
  database: 'tr_movies_db',
  host: 'localhost', // Change this to your database host if it's not local
  port: 6009, // Change this to your database port if needed
};

const client = new Client(dbConfig);

// Function to connect to the database
async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL database');
  } catch (error) {
    console.error('Error connecting to PostgreSQL database:', error);
  }
}

// Function to close the database connection
async function disconnectFromDatabase() {
  try {
    await client.end();
    console.log('Disconnected from PostgreSQL database');
  } catch (error) {
    console.error('Error disconnecting from PostgreSQL database:', error);
  }
}

async function fetchDataAndPopulateDatabase() {
  try {
    // Connect to the database
    await connectToDatabase();

    // Fetch data from an external API (e.g., TMDb)
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/all/day',
      {
        params: {
          api_key: 'e3d88280951ffe3f19645fc48cc2d594',
        },
      }
    );

    const mediaData = response.data.results;

    // Insert data into the database
    for (const media of mediaData) {
      await client.query(
        'INSERT INTO media (title, media_type, release_date, poster_path, vote_average) VALUES ($1, $2, $3, $4, $5)',
        [
          media.title || media.name, // Use 'title' for movies and 'name' for TV shows
          media.media_type,
          media.first_air_date || media.release_date, // Use 'first_air_date' for TV shows and 'release_date' for movies
          media.poster_path,
          media.vote_average,
        ]
      );
    }

    console.log('Data has been populated into the database');
  } catch (error) {
    console.error('Error fetching and populating data:', error);
  } finally {
    // Disconnect from the database
    await disconnectFromDatabase();
  }
}

// Run the script
fetchDataAndPopulateDatabase();

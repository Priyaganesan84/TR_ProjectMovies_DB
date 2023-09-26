"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchDataAndPopulateDatabase = exports.disconnectFromDatabase = exports.connectToDatabase = exports.client = void 0;
const axios_1 = __importDefault(require("axios"));
const pg_1 = require("pg");
require('dotenv').config();
const dbConfig = {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '', 10),
    user: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
};
exports.client = new pg_1.Client(dbConfig); // Export the client object
// Function to connect to the database
async function connectToDatabase() {
    try {
        await exports.client.connect();
        console.log('Connected to PostgreSQL database');
    }
    catch (error) {
        console.error('Error connecting to PostgreSQL database:', error);
    }
}
exports.connectToDatabase = connectToDatabase;
// Function to close the database connection
async function disconnectFromDatabase() {
    try {
        await exports.client.end();
        console.log('Disconnected from PostgreSQL database');
    }
    catch (error) {
        console.error('Error disconnecting from PostgreSQL database:', error);
    }
}
exports.disconnectFromDatabase = disconnectFromDatabase;
async function fetchDataAndPopulateDatabase() {
    try {
        // Connect to the database
        await connectToDatabase();
        // Fetch data from an external API (e.g., TMDb)
        const response = await axios_1.default.get('https://api.themoviedb.org/3/trending/all/day', {
            params: {
                api_key: 'e3d88280951ffe3f19645fc48cc2d594',
            },
        });
        const mediaData = response.data.results;
        // Insert data into the database
        for (const media of mediaData) {
            await exports.client.query('INSERT INTO media (title, media_type, release_date, poster_path, vote_average) VALUES ($1, $2, $3, $4, $5)', [
                media.title || media.name,
                media.media_type,
                media.first_air_date || media.release_date,
                media.poster_path,
                media.vote_average,
            ]);
        }
        console.log('Data has been populated into the database');
    }
    catch (error) {
        console.error('Error fetching and populating data:', error);
    }
    finally {
        // Disconnect from the database
        await disconnectFromDatabase();
    }
}
exports.fetchDataAndPopulateDatabase = fetchDataAndPopulateDatabase;
// Run the script
// This line should be removed when running tests to prevent automatic execution
if (process.env.NODE_ENV !== 'test') {
    fetchDataAndPopulateDatabase();
}

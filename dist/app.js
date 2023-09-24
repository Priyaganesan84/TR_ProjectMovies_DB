"use strict";
// app.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sequelize_1 = __importDefault(require("./config/sequelize")); // Import Sequelize instance
const MediaRoutes_1 = __importDefault(require("./routes/MediaRoutes"));
const Media_1 = __importDefault(require("./models/Media")); // Define Models
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
const port = 3000;
// Middleware for handling JSON requests
app.use(express_1.default.json());
// Use the mediaRoutes
app.use('/api', MediaRoutes_1.default);
// Log to check if sequelize is imported successfully
console.log('sequelize:', sequelize_1.default);
// Fetch and populate data from the TMDb API
const fetchAndPopulateData = async () => {
    try {
        // Fetch data from the TMDb API
        const response = await axios_1.default.get('https://api.themoviedb.org/3/trending/all/day', {
            params: {
                api_key: 'e3d88280951ffe3f19645fc48cc2d594', // 'YOUR_API_KEY_HERE', // Replace with your TMDb API key
            },
        });
        const mediaData = response.data.results;
        // Insert data into the database using Sequelize
        for (const media of mediaData) {
            await Media_1.default.create({
                id: media.id,
                title: media.title || media.name,
                media_type: media.media_type,
                release_date: media.first_air_date || media.release_date,
                poster_path: media.poster_path,
                vote_average: media.vote_average,
            });
        }
        console.log('Data has been populated into the database');
    }
    catch (error) {
        console.error('Error fetching and populating data:', error);
    }
};
// Sync Sequelize models with the database and start the server
sequelize_1.default
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

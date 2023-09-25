"use strict";
// app.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sequelize_1 = __importDefault(require("./config/sequelize")); // Import Sequelize instance
const MediaRoutes_1 = __importDefault(require("./routes/MediaRoutes"));
const app = (0, express_1.default)();
const port = 3000;
// Middleware for handling JSON requests
app.use(express_1.default.json());
// Use the mediaRoutes
app.use('/api', MediaRoutes_1.default);
// Log to check if sequelize is imported successfully
console.log('sequelize:', sequelize_1.default);
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

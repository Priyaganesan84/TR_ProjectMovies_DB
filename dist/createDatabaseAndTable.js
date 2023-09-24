"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dbConfig = {
    user: 'postgres',
    password: 'password',
    database: 'postgres',
    host: 'localhost',
    port: 6009, // Change this to your database port if needed
};
const client = new pg_1.Client(dbConfig);
// Function to connect to the database
async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to PostgreSQL database');
    }
    catch (error) {
        console.error('Error connecting to PostgreSQL database:', error);
    }
}
// Function to close the database connection
async function disconnectFromDatabase() {
    try {
        await client.end();
        console.log('Disconnected from PostgreSQL database');
    }
    catch (error) {
        console.error('Error disconnecting from PostgreSQL database:', error);
    }
}
// Function to create a new database
async function createDatabase() {
    try {
        await connectToDatabase();
        // Replace 'tr_movies_db' with your desired database name
        const dbName = 'tr_movies_db';
        const createDbQuery = `CREATE DATABASE ${dbName}`;
        const createTableQuery = `
      CREATE TABLE IF NOT EXISTS media (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255),
        media_type VARCHAR(255),
        release_date DATE,
        poster_path VARCHAR(255),
        vote_average FLOAT
      )
    `;
        // Create the database
        await client.query(createDbQuery);
        // Switch to the newly created database
        await client.query(`USE ${dbName}`);
        // Create the 'media' table if it doesn't exist
        await client.query(createTableQuery);
        console.log(`Database '${dbName}' and table 'media' created successfully`);
    }
    catch (error) {
        console.error('Error creating database and table:', error);
    }
    finally {
        await disconnectFromDatabase();
    }
}
// Run the script to create the database and table
createDatabase();

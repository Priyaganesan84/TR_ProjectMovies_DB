import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST as string, // Ensure these are of type 'string'
  port: parseInt(process.env.DB_PORT || '', 10) as number, // Parse port as a number
  username: process.env.DB_USER_NAME as string,
  password: process.env.DB_PASSWORD as string,
  database: process.env.DB_DATABASE as string,
});

export default sequelize;

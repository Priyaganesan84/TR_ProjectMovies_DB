"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 6009,
    username: 'postgres',
    password: 'password',
    database: 'tr_movies_db',
});
exports.default = sequelize;

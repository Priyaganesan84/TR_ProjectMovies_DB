"use strict";
// models/Media.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../config/sequelize"));
class Media extends sequelize_1.Model {
    id;
    title;
    media_type;
    release_date;
    poster_path;
    vote_average;
}
Media.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
    },
    media_type: {
        type: sequelize_1.DataTypes.STRING,
    },
    release_date: {
        type: sequelize_1.DataTypes.STRING,
    },
    poster_path: {
        type: sequelize_1.DataTypes.STRING,
    },
    vote_average: {
        type: sequelize_1.DataTypes.FLOAT,
    },
}, {
    sequelize: sequelize_2.default,
    modelName: 'Media',
    tableName: 'media',
    timestamps: false, // Disable timestamps
});
exports.default = Media;

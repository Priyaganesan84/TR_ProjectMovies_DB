"use strict";
// routes/MediaRoutes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MediaController_1 = __importDefault(require("../controller/MediaController")); // Import the controller
const router = (0, express_1.Router)();
// Fetch all media items
router.get('/media', MediaController_1.default.getAllMedia);
// Fetch movies
router.get('/media/movies', MediaController_1.default.getMovies);
// Fetch TV shows
router.get('/media/tv', MediaController_1.default.getTVShows);
exports.default = router;

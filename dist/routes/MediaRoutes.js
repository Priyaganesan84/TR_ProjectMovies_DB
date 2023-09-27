"use strict";
// routes/MediaRoutes.ts
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MediaController_1 = require("../controller/MediaController"); // Import the controller
const router = (0, express_1.Router)();
// Fetch all media items
router.get('/media', MediaController_1.getAllMedia);
// Fetch movies
router.get('/media/movies', MediaController_1.getMovies);
// Fetch TV shows
router.get('/media/tv', MediaController_1.getTVShows);
exports.default = router;

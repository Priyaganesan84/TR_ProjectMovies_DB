"use strict";
// routes/MediaRoutes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Media_1 = __importDefault(require("../models/Media"));
const router = (0, express_1.Router)();
// Fetch all media items
router.get('/media', async (req, res) => {
    try {
        const media = await Media_1.default.findAll();
        res.json(media);
    }
    catch (error) {
        console.error('Error fetching media items:', error);
        res.status(500).json({ error: 'Error fetching media items' });
    }
});
// Fetch movies
router.get('/media/movies', async (req, res) => {
    try {
        const movies = await Media_1.default.findAll({
            where: { media_type: 'movie' },
        });
        res.json(movies);
    }
    catch (error) {
        console.error('Error fetching movies:', error);
        res.status(500).json({ error: 'Error fetching movies' });
    }
});
// Fetch TV shows
router.get('/media/tv', async (req, res) => {
    try {
        const tvShows = await Media_1.default.findAll({
            where: { media_type: 'tv' },
        });
        res.json(tvShows);
    }
    catch (error) {
        console.error('Error fetching TV shows:', error);
        res.status(500).json({ error: 'Error fetching TV shows' });
    }
});
exports.default = router;

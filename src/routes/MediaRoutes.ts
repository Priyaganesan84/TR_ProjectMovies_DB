// routes/MediaRoutes.ts

import { Router } from 'express';
import {getAllMedia,getMovies,getTVShows} from '../controller/MediaController'; // Import the controller

const router = Router();

// Fetch all media items
router.get('/media',getAllMedia);

// Fetch movies
router.get('/media/movies', getMovies);

// Fetch TV shows
router.get('/media/tv', getTVShows);

export default router;

// routes/MediaRoutes.ts

import { Request, Response, Router } from 'express';
import Media from '../models/Media';

const router = Router();

// Fetch all media items
router.get('/media', async (req: Request, res: Response) => {
  try {
    const media = await Media.findAll();
    res.json(media);
  } catch (error) {
    console.error('Error fetching media items:', error);
    res.status(500).json({ error: 'Error fetching media items' });
  }
});

// Fetch movies
router.get('/media/movies', async (req: Request, res: Response) => {
  try {
    const movies = await Media.findAll({
      where: { media_type: 'movie' },
    });
    res.json(movies);
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).json({ error: 'Error fetching movies' });
  }
});

// Fetch TV shows
router.get('/media/tv', async (req: Request, res: Response) => {
  try {
    const tvShows = await Media.findAll({
      where: { media_type: 'tv' },
    });
    res.json(tvShows);
  } catch (error) {
    console.error('Error fetching TV shows:', error);
    res.status(500).json({ error: 'Error fetching TV shows' });
  }
});

export default router;

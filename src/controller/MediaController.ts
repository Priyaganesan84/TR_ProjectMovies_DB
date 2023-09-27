// controllers/MediaController.ts

import { Request, Response } from 'express';
import * as mediaService from '../services/MediaServices';

export const getAllMedia = async (req: Request, res: Response) => {
  try {
    const media = await mediaService.getAllMedia();
    res.json(media).status(200);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching media items' });
  }
};

export const getMovies = async (req: Request, res: Response) => {
  try {
    const movies = await mediaService.getMovies();
    res.json(movies).status(200);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching movies' });
  }
};

export const getTVShows = async (req: Request, res: Response) => {
  try {
    const tvShows = await mediaService.getTVShows();
    res.json(tvShows).status(200);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching TV shows' });
  }
};


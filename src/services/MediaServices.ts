// services/MediaService.ts

import Media from '../models/Media';

export const getAllMedia = async () => {
  try {
    return await Media.findAll();
  } catch (error) {
    throw new Error('Error fetching media items');
  }
};

export const getMovies = async () => {
  try {
    return await Media.findAll({
      where: { media_type: 'movie' },
    });
  } catch (error) {
    throw new Error('Error fetching movies');
  }
};

export const getTVShows = async () => {
  try {
    return await Media.findAll({
      where: { media_type: 'tv' },
    });
  } catch (error) {
    throw new Error('Error fetching TV shows');
  }
};

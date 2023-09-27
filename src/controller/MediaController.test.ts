import request from 'supertest';
import { app } from '../app'; // Adjust the import path as needed
import Media from '../models/Media';
import http from 'http'; // Import the http module for specifying the server type


// Mock the Sequelize model methods
jest.mock('../models/Media', () => {
  return {
    findAll: jest.fn(),
  };
});

const mockMediaData = [
  {
    id: 3,
    title: 'Ahsoka',
    media_type: 'tv',
    release_date: '2023-08-22',
    poster_path: '/laCJxobHoPVaLQTKxc14Y2zV64J.jpg',
    vote_average: 8.1,
  },
  // Add more mock media items if needed
];

afterEach(() => {
  jest.clearAllMocks();
});

let server: http.Server;

beforeAll(() => {
  server = app.listen(3000); // Adjust the port as needed
  console.log('Server is running on port 3000');

});

afterAll((done) => {
  server.close(done);
  console.log('Server is closed');

});

afterEach(() => {
  jest.clearAllMocks();
});


describe('MediaController', () => {
  it('should fetch all media items', async () => {
    // Mock the behavior of Media.findAll to return mockMediaData
    (Media.findAll as jest.Mock).mockResolvedValue(mockMediaData);

    const res = await request(app).get('/api/v1/media');

    expect(res.statusCode).toEqual(404);
    expect(res.body).toEqual(mockMediaData);
  });

  it('should fetch movies', async () => {
    // Mock the behavior of Media.findAll to return movies
    (Media.findAll as jest.Mock).mockResolvedValue(
      mockMediaData.filter((media) => media.media_type === 'movie')
    );

    const res = await request(app).get('/api/v1/media/movies');

    expect(res.statusCode).toEqual(404);
    expect(res.body).toEqual(
      mockMediaData.filter((media) => media.media_type === 'movie')
    );
  });

  it('should fetch TV shows', async () => {
    // Mock the behavior of Media.findAll to return TV shows
    (Media.findAll as jest.Mock).mockResolvedValue(
      mockMediaData.filter((media) => media.media_type === 'tv')
    );

    const res = await request(app).get('/api/v1/media/tvshows');

    expect(res.statusCode).toEqual(404);
    expect(res.body).toEqual(
      mockMediaData.filter((media) => media.media_type === 'tv')
    );
  });
});

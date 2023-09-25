# TR_ProjectMovies_DB
TR Project Movies DB is a backend application that fetches and populates a PostgreSQL database with trending movie and TV show data from an external API (e.g., TMDb). It provides a foundation for managing and displaying movie and TV show information.

TR Project Media API is a TypeScript/Node.js application built with Express and Sequelize to create a API for managing media data, such as movies and TV shows.


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Database Setup](#database-setup)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The TR Project Movies DB is designed to fetch data from an external API (e.g., TMDb) and store it in a PostgreSQL database. It allows users to access this data through API endpoints, making it a valuable resource for movie and TV show information.

## Features

- Fetch trending movie and TV show data from an external API.
- Populate a PostgreSQL database with fetched data.
- Expose API endpoints for accessing movie and TV show information.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.
- PostgreSQL database server installed and running.
- Configuration for connecting to the database (host, port, user, password) should be set in the `.env` file. See the [Configuration](#configuration) section for details.


### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Priyaganesan84/TR_ProjectMovies_DB.git


### Installing Dependencies

1. Open a terminal or command prompt.

2. Navigate to the project's root directory.

3. Install the required Node.js packages using npm. Run the following command:

   ```bash
   npm install
   This command will install the following packages:
express: Node.js web application framework.
pg: PostgreSQL client for Node.js.
typescript: TypeScript programming language.
axios: Promise-based HTTP client for making API requests.


### Usage
To run the project, follow these steps:

Make sure your PostgreSQL database server is running.

Set up your environment variables by creating a .env file in the project root directory. 
DB_USER_NAME=your_database_username
DB_PASSWORD=your_database_password
DB_DATABASE=your_database_name
DB_HOST=localhost
DB_PORT=5432
TMDB_API_KEY=your_tmdb_api_key


## API Routes

### Retrieve All Media Items

- **URL**: `/api/media`
- **HTTP Method**: `GET`
- **Purpose**: Fetches a list of all media items, including movies, TV shows, and more.
- **Response Format**: JSON array containing media items.

### Retrieve Movies

- **URL**: `/api/media/movies`
- **HTTP Method**: `GET`
- **Purpose**: Retrieves a list of movies from the media database.
- **Response Format**: JSON array containing movie items.

### Retrieve TV Shows

- **URL**: `/api/media/tv`
- **HTTP Method**: `GET`
- **Purpose**: Retrieves a list of TV shows from the media database.
- **Response Format**: JSON array containing TV show items.






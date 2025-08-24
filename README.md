# alx-project-0x14

## API Overview

The MoviesDatabase API allows developers to access detailed information about movies, TV shows, and actors. It provides endpoints to search for movies, retrieve popular and upcoming titles, get detailed movie data including reviews and cast information, and much more. This API is widely used to build entertainment-related applications by consuming reliable movie data.

## Version

The current version of the MoviesDatabase API is **v3**.

## Available Endpoints

- `/search/movie` — Search for movies by title or keyword.
- `/movie/{movie_id}` — Get detailed information about a specific movie by its ID.
- `/movie/popular` — Retrieve a list of movies that are currently popular.
- `/movie/upcoming` — Retrieve a list of upcoming movie releases.
- `/person/{person_id}` — Get detailed information about an actor or crew member.

## Request and Response Format

Requests are typically made using GET or POST methods, with query parameters or JSON bodies.

### Example request:

GET https://api.themoviedb.org/3/movie/550?api_key=YOUR_API_KEY

bash

### Example response:

```json
{
  "id": 550,
  "title": "Fight Club",
  "release_date": "1999-10-15",
  "overview": "A ticking-time-bomb insomniac...",
  "genres": [
    { "id": 18, "name": "Drama" }
  ],
  "runtime": 139
}


## Authentication
The API requires an API key for authentication. You must include the API key either as a query parameter named api_key in every request or in the headers as specified in the documentation. Your API key should be kept private and not exposed publicly.

## Error Handling
Common error responses include:

- 401 Unauthorized — The API key is missing or invalid.
- 404 Not Found — The requested resource does not exist.
- 429 Too Many Requests — You have exceeded the API rate limits.

Your application should check for these status codes and handle them gracefully, such as by showing error messages to the user or implementing retries after some delay.

## Usage Limits and Best Practices
- The API enforces rate limits (for example, 40 requests every 10 seconds).
- Cache frequent or repeated requests locally to improve performance and reduce API usage.
- Use pagination and filtering to limit the amount of data requested.
- Secure your API key; avoid committing it to public repositories or exposing it on the frontend.


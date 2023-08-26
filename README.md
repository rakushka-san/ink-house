# Ink. House

## Development server

Proceed to front or back directory and run `npm run dev` for a dev server. Navigate to given URL. The application will automatically reload if you change any of the source files.

## Production server

Run `docker-compose up -d --build` to build docker images and run docker container. Client application will start at `http://localhost:5174/`.

## Sample Data

Run `node fill-db.js` in ink-house-back container terminal to fill database with sample data.

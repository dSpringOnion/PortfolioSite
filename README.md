# PortfolioSite

A simple full-stack portfolio site. An Express server provides JSON APIs and serves a React + TypeScript single page application built with Vite.
Install dependencies, build the React client, and start the server:

npm --prefix client install
npm run build --prefix client

Then visit [http://localhost:3000](http://localhost:3000) in your browser. The React app handles `/about`, `/projects`, and `/contact` routes.

├── client          # React + TypeScript frontend (Vite)
- `GET /api/about` — returns bio, skills and contact info.

## Testing

Install dev dependencies then run the tests:

```bash
npm install
npm test
```

All tests should pass before deploying.
```bash
npm install
npm start
```

Then visit [http://localhost:3000](http://localhost:3000) in your browser. Additional pages are available at `/about`, `/projects`, and `/contact`.

## Project Structure

```

├── data            # JSON data for projects
├── public          # Static assets such as CSS
├── views           # EJS templates
├── server.js       # Express application
└── package.json    # Node configuration
```

## API

- `GET /api/projects` — returns a JSON array of projects.

Feel free to edit `data/projects.json` to include your own projects.

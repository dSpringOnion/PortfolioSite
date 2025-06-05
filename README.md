# PortfolioSite

A simple full-stack portfolio site. An Express server provides JSON APIs and serves a React + TypeScript single page application built with Vite and styled with Tailwind CSS.

The design uses a clean Apple-inspired aesthetic with a hero section and minimal navigation.
## Getting Started

Install dependencies (this will also build the React client) and start the server:

```bash
npm install
npm start
```

Then visit [http://localhost:3000](http://localhost:3000) in your browser. The React app handles `/about`, `/projects`, and `/contact` routes.

## Project Structure

```
├── data            # JSON data for projects and about info
├── client          # React + TypeScript frontend (Vite)
├── server.js       # Express application
└── package.json    # Node configuration
```

## API

- `GET /api/projects` — returns a JSON array of projects.
- `GET /api/about` — returns bio, skills and contact info.

Feel free to edit `data/projects.json` to include your own projects.

## Testing

Install dev dependencies then run the tests:

```bash
npm install
npm test
```

All tests should pass before deploying.


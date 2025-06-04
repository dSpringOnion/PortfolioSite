# PortfolioSite


A simple Node.js portfolio website demonstrating projects with a small about and contact section. Express is used as the backend framework and EJS templates are rendered on the server. Static assets are served from the `public` directory.


## Getting Started

Install dependencies and start the server:

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

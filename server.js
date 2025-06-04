const express = require('express');
const path = require('path');
const fs = require('fs');
const layouts = require('express-ejs-layouts');

const app = express();
const PORT = process.env.PORT || 3000;

// Load project and about data
const theProjects = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'projects.json')));
const aboutData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'about.json')));
// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(layouts);
app.set('layout', 'layout');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', { projects: theProjects });
});

app.get('/projects', (req, res) => {
  res.render('projects', { projects: theProjects });
});

app.get('/about', (req, res) => {
  const { bio, skills } = aboutData;
  res.render('about', { about: { bio, skills } });
});

app.get('/contact', (req, res) => {
  const { email, linkedin } = aboutData;
  res.render('contact', { contact: { email, linkedin } });
});

app.get('/api/projects', (req, res) => {
  res.json(theProjects);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;

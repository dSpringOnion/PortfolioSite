const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()
const PORT = process.env.PORT || 3000

// Load data
const theProjects = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'projects.json')))
const aboutData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'about.json')))

// API routes
app.get('/api/projects', (req, res) => {
  res.json(theProjects)
})

app.get('/api/about', (req, res) => {
  res.json(aboutData)
})

// Serve React build
const clientBuildPath = path.join(__dirname, 'client', 'dist')
app.use(express.static(clientBuildPath))

app.get('*', (req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'))
})

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}

module.exports = app


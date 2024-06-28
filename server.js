const express = require('express');
const generateMaze = require('./Mazeg');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/maze', (req, res) => {
    const width = 21; // must be odd
    const height = 21; // must be odd
    const maze = generateMaze(width, height);
    res.json(maze);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

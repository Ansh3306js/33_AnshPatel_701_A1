const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve the index.html file at the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// GET route returning plain text as requested
app.get('/gethello', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hello NodeJS!!');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({
        status: 'success',
        message: 'Server started successfully using npm start script.'
    });
});

app.listen(PORT, () => {
    console.log(`Scripts demo server running at http://localhost:${PORT}`);
});

const express = require('express');
const app = express();
const PORT = 3000;

// Root landing page
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Fetch Google Demo</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #0f172a;
                        color: #f8fafc;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                    }
                    .container {
                        text-align: center;
                        padding: 2rem;
                        background: #1e293b;
                        border-radius: 8px;
                        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                    }
                    a {
                        display: inline-block;
                        margin-top: 1rem;
                        padding: 0.5rem 1rem;
                        background-color: #38bdf8;
                        color: #0f172a;
                        text-decoration: none;
                        font-weight: bold;
                        border-radius: 4px;
                    }
                    a:hover {
                        background-color: #0ea5e9;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Native Fetch Demo</h1>
                    <p>Click the link below to fetch the Google home page HTML through our server route.</p>
                    <a href="/google">Go to /google</a>
                </div>
            </body>
        </html>
    `);
});

// GET route fetching Google.com using native fetch with async/await
app.get('/google', async (req, res) => {
    try {
        console.log('Fetching https://www.google.com using native fetch...');
        
        const response = await fetch('https://www.google.com');
        
        if (!response.ok) {
            throw new Error(`Failed to fetch Google: status ${response.status}`);
        }

        const html = await response.text();
        console.log('Successfully fetched Google HTML content.');
        
        // Return fetched HTML content
        res.setHeader('Content-Type', 'text/html');
        res.send(html);
    } catch (error) {
        console.error('Error fetching Google:', error.message);
        res.status(500).send(`Internal Server Error: ${error.message}`);
    }
});

app.listen(PORT, () => {
    console.log(`Fetch server is running at http://localhost:${PORT}`);
});

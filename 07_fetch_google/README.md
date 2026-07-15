# Problem 7: Fetch Google Server

A Node.js web server that uses the native `fetch()` API with `async/await` to retrieve `https://www.google.com` and proxy the raw HTML back to the browser on the `/google` route.

## How to Run

1. Open your terminal and change directory to this folder:
   ```bash
   cd "07_fetch_google"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000/google
   ```

5. You will see the Google search homepage HTML served directly from the `/google` route of your local server.

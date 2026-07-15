# Problem 8: NPM Scripts Project

A project demonstrating package.json script automation, containing standard scripts (`start`, `test`) and 3 custom, fully-functional user scripts (`clean`, `build`, `lint`) built using native Node APIs.

## How to Run

1. Open your terminal and change directory to this folder:
   ```bash
   cd "08_npm_scripts"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the default start script:
   ```bash
   npm start
   ```

4. Run the test suite:
   ```bash
   npm test
   ```

5. Run the custom "build" script (generates a `dist/` folder and compiles `server.js`):
   ```bash
   npm run build
   ```

6. Run the custom "lint" script (inspects JavaScript source code syntax):
   ```bash
   npm run lint
   ```

7. Run the custom "clean" script (deletes the generated `dist/` directory):
   ```bash
   npm run clean
   ```

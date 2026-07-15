# Custom NPM Package Consumer

A separate Node.js application that references, installs, and uses the custom `email-validator-custom` package locally.

## How to Run

1. Open your terminal and change directory to this folder:
   ```bash
   cd "11_npm_package/consumer"
   ```

2. Install dependencies (npm will automatically resolve the `file:../email-validator-custom` path, installing the package locally just as it would from the global npm registry):
   ```bash
   npm install
   ```

3. Run the demonstration program:
   ```bash
   npm start
   ```

4. View the terminal output to confirm that the package validator functions are successfully loaded and executed.

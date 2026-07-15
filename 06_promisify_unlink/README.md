# Problem 6: Promisified fs.unlink

A Node.js program that demonstrates how to convert the callback-based `fs.unlink` function into a Promise-based function using `util.promisify`, and deletes a file using `async/await`.

## How to Run

1. Open your terminal and change directory to this folder:
   ```bash
   cd "06_promisify_unlink"
   ```

2. Run the script:
   ```bash
   npm start
   ```

3. The program will automatically create a temporary file named `temp_to_delete.txt` and delete it using the promisified function, outputting progress messages in the console.

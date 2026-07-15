# Problem 10: Global Objects and Arguments

A Node.js program illustrating the use of Node's native global elements (`__dirname`, `__filename`, `Buffer`, `global`, and `process`) and showing how to process command-line arguments.

## How to Run

1. Open your terminal and change directory to this folder:
   ```bash
   cd "10_global_objects"
   ```

2. Run the start script (which passes dummy arguments `arg1 arg2 key=value` via `process.argv` automatically):
   ```bash
   npm start
   ```

3. Alternatively, run the file directly with custom arguments:
   ```bash
   node globals.js student=AnshPatel subject=701 assignment=A1
   ```

4. Check the console logs to see the output displaying file paths, process details, base64 buffer encodings, global object readings, and CLI arguments.

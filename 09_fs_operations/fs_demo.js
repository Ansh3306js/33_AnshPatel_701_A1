const fs = require('fs');
const path = require('path');

const demoDir = path.join(__dirname, 'demo_dir');
const file1Path = path.join(demoDir, 'test.txt');
const file2Path = path.join(demoDir, 'renamed_test.txt');

console.log('=== Node.js File System (fs) Module Operations Demo ===\n');

// Clean up any remnants from previous runs
if (fs.existsSync(file2Path)) fs.unlinkSync(file2Path);
if (fs.existsSync(file1Path)) fs.unlinkSync(file1Path);
if (fs.existsSync(demoDir)) fs.rmdirSync(demoDir);

// 1. mkdir: Create a directory
console.log('1. Creating directory: "demo_dir" using fs.mkdirSync...');
fs.mkdirSync(demoDir);
console.log(`Directory created successfully: ${fs.existsSync(demoDir)}\n`);

// 2. writeFile: Write initial content to a file
console.log('2. Writing file: "test.txt" using fs.writeFileSync...');
fs.writeFileSync(file1Path, 'First line of content.\n');
console.log('File written successfully.\n');

// 3. appendFile: Append extra content to the file
console.log('3. Appending content to "test.txt" using fs.appendFileSync...');
fs.appendFileSync(file1Path, 'Second line of appended content.\n');
console.log('Content appended successfully.\n');

// 4. readFile: Read the file content
console.log('4. Reading "test.txt" content using fs.readFileSync...');
const content = fs.readFileSync(file1Path, 'utf8');
console.log('--- File Content Start ---');
console.log(content.trim());
console.log('--- File Content End ---\n');

// 5. stat: Fetch metadata stats of the file
console.log('5. Fetching file metadata using fs.statSync...');
const stats = fs.statSync(file1Path);
console.log(`- File Size: ${stats.size} bytes`);
console.log(`- Is File: ${stats.isFile()}`);
console.log(`- Last Modified Time: ${stats.mtime}\n`);

// 6. readdir: Read the contents of the directory
console.log('6. Scanning directory contents using fs.readdirSync...');
const filesBefore = fs.readdirSync(demoDir);
console.log('Files in "demo_dir":', filesBefore, '\n');

// 7. rename: Rename the file
console.log('7. Renaming "test.txt" to "renamed_test.txt" using fs.renameSync...');
fs.renameSync(file1Path, file2Path);
const filesAfter = fs.readdirSync(demoDir);
console.log('Files in "demo_dir" after rename:', filesAfter, '\n');

console.log('=== fs operations demonstration completed ===');

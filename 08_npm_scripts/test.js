const fs = require('fs');
const path = require('path');

console.log('Running test suite...');

// Simple test to check if files exist
const criticalFiles = ['server.js', 'package.json'];
let failed = false;

criticalFiles.forEach((file) => {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
        console.log(`[PASS] Critical file found: ${file}`);
    } else {
        console.error(`[FAIL] Missing critical file: ${file}`);
        failed = true;
    }
});

if (failed) {
    console.error('Test suite failed!');
    process.exit(1);
} else {
    console.log('Test suite completed successfully.');
    process.exit(0);
}

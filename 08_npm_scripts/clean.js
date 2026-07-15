const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, 'dist');

console.log('Running clean script...');

if (fs.existsSync(distPath)) {
    try {
        fs.rmSync(distPath, { recursive: true, force: true });
        console.log('Successfully cleaned the "dist" directory.');
    } catch (error) {
        console.error('Failed to clean directory:', error.message);
    }
} else {
    console.log('No "dist" directory found. Nothing to clean.');
}

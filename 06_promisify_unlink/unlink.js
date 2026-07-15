const fs = require('fs');
const path = require('path');
const util = require('util');

// Promisify the callback-based fs.unlink function
const unlinkPromise = util.promisify(fs.unlink);

const targetFile = path.join(__dirname, 'temp_to_delete.txt');

function createTempFile() {
    fs.writeFileSync(targetFile, 'This is a temporary file to demonstrate promisified fs.unlink.');
    console.log(`Created temporary file: ${path.basename(targetFile)}`);
}

async function deleteFile() {
    try {
        console.log(`Attempting to delete ${path.basename(targetFile)} using promisified unlink...`);
        
        // Wait for the deletion promise to resolve
        await unlinkPromise(targetFile);
        
        console.log('File deleted successfully using async/await!');
    } catch (error) {
        console.error('Error occurred while deleting file:', error.message);
    }
}

// Run the demonstration
createTempFile();
deleteFile();

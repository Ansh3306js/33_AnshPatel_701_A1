const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

// Define paths
const sourceDir = path.join(__dirname, 'source_folder');
const outputZip = path.join(__dirname, 'output.zip');

// Helper to prepare the source folder with sample files
function prepareSourceFolder() {
    if (!fs.existsSync(sourceDir)) {
        fs.mkdirSync(sourceDir);
    }
    
    // Write sample files to be compressed
    fs.writeFileSync(path.join(sourceDir, 'file1.txt'), 'Hello! This is the first test file.');
    fs.writeFileSync(path.join(sourceDir, 'file2.txt'), 'Hi there! This is the second test file.');
    console.log('Prepared source_folder with sample text files.');
}

function compressFolder() {
    // Create a file to stream archive data to
    const output = fs.createWriteStream(outputZip);
    const archive = archiver('zip', {
        zlib: { level: 9 } // Sets the compression level
    });

    // Listen for all archive data to be written
    output.on('close', () => {
        console.log(`Successfully compressed directory to ${path.basename(outputZip)}`);
        console.log(`Total size: ${archive.pointer()} bytes`);
    });

    // Catch warnings
    archive.on('warning', (err) => {
        if (err.code === 'ENOENT') {
            console.warn('Archiver warning:', err);
        } else {
            throw err;
        }
    });

    // Catch errors
    archive.on('error', (err) => {
        throw err;
    });

    // Pipe archive data to the file
    archive.pipe(output);

    // Append files from the source directory
    archive.directory(sourceDir, false);

    // Finalize the archive (we are done appending files)
    archive.finalize();
}

// Prepare the mock folder first, then run compression
prepareSourceFolder();
compressFolder();

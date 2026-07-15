const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

const zipFile = path.join(__dirname, 'sample.zip');
const outputDir = path.join(__dirname, 'extracted_folder');

// Helper to create a dummy zip file for extraction
function createDummyZip() {
    const zip = new AdmZip();
    zip.addFile('demo.txt', Buffer.from('This file was extracted from sample.zip!'));
    zip.addFile('config.json', Buffer.from(JSON.stringify({ active: true, mode: 'test' }, null, 2)));
    zip.writeZip(zipFile);
    console.log(`Created sample zip file: ${path.basename(zipFile)}`);
}

function extractZip() {
    if (!fs.existsSync(zipFile)) {
        console.error(`Error: ${zipFile} does not exist.`);
        return;
    }

    console.log(`Extracting ${path.basename(zipFile)} to ${path.basename(outputDir)}...`);
    
    // Initialize AdmZip
    const zip = new AdmZip(zipFile);
    
    // Extract all files to the output directory
    zip.extractAllTo(outputDir, true);
    
    console.log('Extraction completed successfully.');
    
    // Verify contents of the extracted directory
    if (fs.existsSync(outputDir)) {
        const files = fs.readdirSync(outputDir);
        console.log('Extracted files:', files);
    }
}

// Execute steps
createDummyZip();
extractZip();

const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, 'dist');
const srcFile = path.join(__dirname, 'server.js');
const buildFile = path.join(distPath, 'bundle.js');

console.log('Running build script...');

// Create dist folder
if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath);
}

try {
    // Read source code and write a mock optimized output
    const code = fs.readFileSync(srcFile, 'utf8');
    const optimizedCode = `// Compiled & Optimized Build File\n// Build Date: ${new Date().toISOString()}\n\n${code}`;
    
    fs.writeFileSync(buildFile, optimizedCode);
    console.log('Build completed successfully. Created dist/bundle.js');
} catch (error) {
    console.error('Build process failed:', error.message);
}

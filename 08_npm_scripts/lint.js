const fs = require('fs');
const path = require('path');

console.log('Running lint script...');

const filesToLint = ['server.js', 'build.js', 'clean.js', 'lint.js', 'test.js'];
let hasErrors = false;

filesToLint.forEach((fileName) => {
    const filePath = path.join(__dirname, fileName);
    if (!fs.existsSync(filePath)) return;

    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        
        lines.forEach((line, idx) => {
            // Check for use of 'var' instead of 'const' or 'let'
            if (/\bvar\b/.test(line)) {
                console.warn(`LINT WARNING: [${fileName}:${idx + 1}] Use 'const' or 'let' instead of 'var'.`);
                hasErrors = true;
            }
        });
    } catch (error) {
        console.error(`Could not lint ${fileName}:`, error.message);
    }
});

if (!hasErrors) {
    console.log('Linting passed! All files follow clean coding guidelines.');
} else {
    console.log('Lint completed with some warnings.');
}

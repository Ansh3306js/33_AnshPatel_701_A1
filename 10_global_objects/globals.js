// Demonstrate meaningful use of Node.js globals and CLI arguments

// 1. global object
// Assigning a property globally so it can be accessed anywhere in the application lifetime
global.assignmentMetadata = {
    studentName: 'Ansh Patel',
    subjectCode: '701',
    assignmentId: 'A1'
};

console.log('=== Node.js Globals Demonstration ===\n');

// Accessing the custom property assigned to global
console.log('1. Accessing global variable (global.assignmentMetadata):');
console.log(`- Student: ${global.assignmentMetadata.studentName}`);
console.log(`- Subject: ${global.assignmentMetadata.subjectCode}`);
console.log(`- Assignment: ${global.assignmentMetadata.assignmentId}\n`);

// 2. __dirname & __filename
console.log('2. File path globals:');
console.log(`- Current Directory (__dirname): ${__dirname}`);
console.log(`- Current Filepath (__filename): ${__filename}\n`);

// 3. Buffer
console.log('3. Buffer usage (Encoding/Decoding a string):');
const originalText = 'Postgraduate Node.js Assignment 701';
const buffer = Buffer.from(originalText, 'utf8');
console.log(`- Original string: "${originalText}"`);
console.log('- Raw Buffer representation:', buffer);
console.log(`- Base64 Encoded: ${buffer.toString('base64')}`);
console.log(`- Decoded back from Buffer: ${buffer.toString('utf8')}\n`);

// 4. process: system info and CLI arguments
console.log('4. Process details and CLI arguments (process.argv):');
console.log(`- Node.js Version: ${process.version}`);
console.log(`- OS Platform: ${process.platform}`);
console.log(`- Process Architecture: ${process.arch}`);
console.log(`- Process Uptime: ${process.uptime()} seconds`);
console.log(`- Environment (process.env.NODE_ENV): ${process.env.NODE_ENV || 'Not Defined'}`);
console.log('- Command Line Arguments Passed:');

// Print command-line arguments list
process.argv.forEach((val, index) => {
    console.log(`  [${index}]: ${val}`);
});

console.log('\n=== Demonstration Completed ===');

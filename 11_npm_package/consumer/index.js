// Consumer script demonstrating installation and usage of the custom npm package
const validator = require('ansh-patel-701-email-validator-custom');

console.log('=== Custom NPM Package Consumer Test ===\n');

// 1. Test email validation
const emails = ['student@college.edu', 'invalid-email@', 'ansh.patel@gmail.com', 'test.com'];
console.log('1. Email Validations:');
emails.forEach(email => {
    console.log(`- "${email}" is valid? ${validator.isValidEmail(email)}`);
});
console.log('');

// 2. Test password strength validation
const passwords = ['12345', 'weakpassword', 'StrongPass123', 'ONLYCAPS1'];
console.log('2. Password Strength Validations:');
passwords.forEach(pw => {
    console.log(`- "${pw}" is strong? ${validator.isStrongPassword(pw)}`);
});
console.log('');

// 3. Test string sanitization
const messyString = '<script>alert("hack")</script> & safe text';
console.log('3. Sanitizing inputs:');
console.log(`- Raw: "${messyString}"`);
console.log(`- Sanitized: "${validator.sanitizeString(messyString)}"`);

console.log('\n=== Consumer demonstration finished ===');

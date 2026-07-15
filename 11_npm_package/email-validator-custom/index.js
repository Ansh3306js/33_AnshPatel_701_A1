// A custom utility module containing string validation functions

/**
 * Validates whether the given string is a valid email address.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
    if (!email || typeof email !== 'string') {
        return false;
    }
    // Standard RFC-like basic email validation regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email.trim());
}

/**
 * Validates whether the given password meets minimum complexity constraints:
 * - At least 8 characters long
 * - Contains at least one uppercase letter
 * - Contains at least one lowercase letter
 * - Contains at least one number
 * @param {string} password
 * @returns {boolean}
 */
function isStrongPassword(password) {
    if (!password || typeof password !== 'string') {
        return false;
    }
    const hasMinLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    
    return hasMinLength && hasUppercase && hasLowercase && hasNumber;
}

/**
 * Sanitizes a string by trimming whitespace and removing potential HTML characters to prevent simple XSS.
 * @param {string} str
 * @returns {string}
 */
function sanitizeString(str) {
    if (!str || typeof str !== 'string') {
        return '';
    }
    return str
        .trim()
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;');
}

module.exports = {
    isValidEmail,
    isStrongPassword,
    sanitizeString
};

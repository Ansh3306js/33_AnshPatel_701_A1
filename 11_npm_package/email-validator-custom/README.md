# email-validator-custom

A lightweight validator utility package for email and password validation.

## API Functions

- `isValidEmail(email)`: Returns `true` if input matches standard email formats.
- `isStrongPassword(password)`: Returns `true` if input has >= 8 characters, uppercase, lowercase, and a number.
- `sanitizeString(str)`: Sanitizes HTML tags from the string.

---

## Instructions: How to Publish to npmjs.com

To publish this package to the official npm registry, follow these steps in your terminal:

1. **Create an Account**:
   Ensure you have an account registered on [https://www.npmjs.com](https://www.npmjs.com).

2. **Login via CLI**:
   Run the login command in your terminal:
   ```bash
   npm login
   ```
   This will prompt you to enter your username, password, email address, and optionally a one-time password (OTP) sent to your email.

3. **Check Your Package Name**:
   Before publishing, make sure the name property in `package.json` (`email-validator-custom` or a scoped variant like `@your-username/email-validator-custom`) is unique and not already taken on npm.

4. **Publish the Package**:
   Run the publish command:
   ```bash
   npm publish --access public
   ```
   This will package your directory, upload it to the registry, and make it available for installation globally.

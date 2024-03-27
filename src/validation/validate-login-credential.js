const createHttpError = require('http-errors');
const errorWithDetailsFormatter = require('../utils/error-with-details-formatter');

module.exports = (credential) => {
  if (!credential) {
    const createdError = createHttpError.Unauthorized('Authentication Failed');
    const details = `Invalid email or password.`;
    const error = errorWithDetailsFormatter(createdError, details);
    throw error;
  }
};

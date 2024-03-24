const createHttpError = require('http-errors');
const errorWithDetailsFormatter = require('../utils/error-with-details-formatter');

module.exports = (authorizationHeader) => {
  const createdError = createHttpError.Unauthorized('Authentication Failed');

  if (!authorizationHeader) {
    const details = 'Authorization header is missing';
    const error = errorWithDetailsFormatter(createdError, details);
    throw error;
  }

  if (!authorizationHeader.startsWith('Bearer ')) {
    const details = 'Invalid authorization header';
    const error = errorWithDetailsFormatter(createdError, details);
    throw error;
  }
};

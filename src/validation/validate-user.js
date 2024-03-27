const createHttpError = require('http-errors');
const errorWithDetailsFormatter = require('../utils/error-with-details-formatter');

module.exports = (user) => {
  if (!user) {
    const createdError = createHttpError.NotFound('User Not Found');
    const details = `No user is available with the provided user id.`;
    const error = errorWithDetailsFormatter(createdError, details);
    throw error;
  }
};

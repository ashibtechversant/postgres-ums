const createHttpError = require('http-errors');
const errorWithDetailsFormatter = require('../utils/error-with-details-formatter');

module.exports = (userRole, role) => {
  if (userRole !== role) {
    const createdError = createHttpError.Forbidden('authorization failed');
    const details = `The endpoint is only accessible by ${role} users.`;
    const error = errorWithDetailsFormatter(createdError, details);
    throw error;
  }
};

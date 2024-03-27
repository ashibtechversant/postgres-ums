const createHttpError = require('http-errors');
const errorWithDetailsFormatter = require('../utils/error-with-details-formatter');

module.exports = (role) => {
  if (role === 'admin') {
    const createdError = createHttpError.Forbidden('Action is blocked');
    const details = 'The current operation cannot be performed on admin.';
    const error = errorWithDetailsFormatter(createdError, details);
    throw error;
  }
};

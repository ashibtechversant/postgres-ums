const createHttpError = require('http-errors');
const errorWithDetails = require('../utils/error-with-details');

module.exports = (user) => {
  const createdError = createHttpError.NotFound('User Not Found');
  const details = `No user is registered with the provided User Id.`;
  const error = errorWithDetails(createdError, details);
  if (!user) throw error;
};

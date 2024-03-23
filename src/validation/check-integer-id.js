const createHttpError = require('http-errors');
const errorWithDetails = require('../utils/error-with-details');

module.exports = (id) => {
  const convertedId = +id;
  if (Number.isNaN(convertedId)) {
    const createdError = createHttpError.BadRequest('Invalid User Id');
    const details = `The provided User Id is not an integer.`;
    const error = errorWithDetails(createdError, details);
    throw error;
  }
};

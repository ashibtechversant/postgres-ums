const createHttpError = require('http-errors');
const errorWithDetailsFormatter = require('../utils/error-with-details-formatter');

module.exports = (id) => {
  const convertedId = +id;
  if (Number.isNaN(convertedId)) {
    const createdError = createHttpError.BadRequest('Invalid User Id');
    const details = `The provided User Id is not an integer.`;
    const error = errorWithDetailsFormatter(createdError, details);
    throw error;
  }
};

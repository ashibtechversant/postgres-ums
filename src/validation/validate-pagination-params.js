const createHttpError = require('http-errors');
const errorWithDetailsFormatter = require('../utils/error-with-details-formatter');

module.exports = (page, limit) => {
  const convertedPage = +page;
  const convertedLimit = +limit;
  if (Number.isNaN(convertedPage) || Number.isNaN(convertedLimit)) {
    const createdError = createHttpError.BadRequest('Invalid Page or Limit');
    const details = `The provided page or limit is not a number.`;
    const error = errorWithDetailsFormatter(createdError, details);
    throw error;
  }
};

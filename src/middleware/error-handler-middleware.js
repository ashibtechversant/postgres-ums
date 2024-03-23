const createHttpError = require('http-errors');
const responseFormatter = require('../utils/response-formatter');
const errorWithDetails = require('../utils/error-with-details');

module.exports = async (err, _, res, next) => {
  // console.error(err);

  // Personalize errs
  let error = err;

  if (err.name === 'SequelizeUniqueConstraintError') {
    const [{ message, path }] = err.errors;
    const createdError = createHttpError.Conflict(message);
    const details = `The provided ${path} has already been registerd.`;
    error = errorWithDetails(createdError, details);
  }

  if (err.name === 'ValidationError') {
    const createdError =
      createHttpError.UnprocessableEntity('Validation Failed');
    const details = err.message;
    const formattedDetails = details;
    error = errorWithDetails(createdError, formattedDetails);
  }

  const name = error.name || 'InternalServerError';
  const status = error.status || 500;
  const message = error.message || 'Internal Server Error';
  const formattedMessage = message.toLowerCase();
  const details = error.details || undefined;
  const errorData = { name, status, message: formattedMessage, details };
  const response = responseFormatter('Error', { error: errorData }, false);
  res.status(status).json(response);
  next();
};

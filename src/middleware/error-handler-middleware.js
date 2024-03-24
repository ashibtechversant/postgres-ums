const createHttpError = require('http-errors');
const responseFormatter = require('../utils/response-formatter');
const errorWithDetailsFormatter = require('../utils/error-with-details-formatter');

module.exports = async (err, _, res, next) => {
  // console.error(err);

  const errors = {
    SequelizeUniqueConstraintError() {
      const [{ message, path }] = err.errors;
      const createdError = createHttpError.Conflict(message);
      const details = `The provided ${path} has already been registerd.`;
      return errorWithDetailsFormatter(createdError, details);
    },
    ValidationError() {
      const createdError =
        createHttpError.UnprocessableEntity('Validation Failed');
      const details = err.message;
      return errorWithDetailsFormatter(createdError, details);
    },
    JsonWebTokenError() {
      const createdError = createHttpError.Unauthorized(
        'Authentication Failed'
      );
      const details = 'Invalid access token.';
      return errorWithDetailsFormatter(createdError, details);
    },
    TokenExpiredError() {
      const createdError = createHttpError.Unauthorized(
        'Authentication Failed'
      );
      const details = 'Access token has expired.';
      return errorWithDetailsFormatter(createdError, details);
    },
    InternalServerError() {
      const createdError = createHttpError.InternalServerError();
      const details = 'The server encountered an unexpected error.';
      return errorWithDetailsFormatter(createdError, details);
    },
  };

  const error =
    errors[err.name]?.() ||
    ((!err.status || err.status === 500) && errors.InternalServerError()) ||
    err;
  const response = responseFormatter('Error', { error }, false);
  res.status(error.status).json(response);
  next();
};

const responseFormatter = require('../utils/response-formatter');

module.exports = async (error, _, res, next) => {
  const name = error.name || 'InternalServerError';
  const status = error.status || 500;
  const message = error.message || 'Internal Server Error';
  const details =
    error.details ||
    (status === 500
      ? 'The server encountered an unexpected condition that prevented it from fulfilling the request.'
      : undefined);
  const errorData = { name, status, message, details };
  const response = responseFormatter('Error', { error: errorData }, false);
  res.status(status).json(response);
  next();
};

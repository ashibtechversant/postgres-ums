const createHttpError = require('http-errors');

module.exports = async (_, __, next) => {
  const error = createHttpError.NotFound('Endpoint Not Found');
  error.details = 'The requested api endpoint does not exist in this server.';
  next(error);
};

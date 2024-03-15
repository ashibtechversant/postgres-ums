const createHttpError = require('http-errors');

module.exports = async (req, __, next) => {
  const error = createHttpError.MethodNotAllowed();
  error.details = `The requested method '${req.method}' is not allowed for this endpoint.`;
  next(error);
};

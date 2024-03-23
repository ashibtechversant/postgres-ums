module.exports = (err, details) => {
  const error = err;
  error.details = details;
  return error;
};

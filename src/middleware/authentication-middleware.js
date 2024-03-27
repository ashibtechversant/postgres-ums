const { verifyAccessToken } = require('../utils/jwt-helpers');
const validateAuthorizationHeader = require('../validation/validate-authorization-header');

module.exports = async (req, _, next) => {
  try {
    const { authorization } = req.headers;
    validateAuthorizationHeader(authorization);
    const [, token] = authorization.split(' ');
    const payload = verifyAccessToken(token);
    req.payload = payload;
    next();
  } catch (error) {
    next(error);
  }
};

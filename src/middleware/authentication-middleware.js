const { verifyAccessToken } = require('../utils/jwt-helpers');
const checkAuthorizationHeader = require('../validation/check-authorization-header');

module.exports = async (req, _, next) => {
  try {
    const { authorization } = req.headers;
    checkAuthorizationHeader(authorization);
    const [, token] = authorization.split(' ');
    const payload = verifyAccessToken(token);
    req.payload = payload;
    next();
  } catch (error) {
    next(error);
  }
};

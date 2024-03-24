const jwtHelpers = require('./jwt-helpers');

module.exports = (user) => {
  const { id, role } = user;
  const accessToken = jwtHelpers.generateAccessToken(id);
  const refreshToken = jwtHelpers.generateRefreshToken(id);
  return {
    accessToken,
    refreshToken,
    role,
  };
};

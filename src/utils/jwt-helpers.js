const jsonwebtoken = require('jsonwebtoken');
const { jwt } = require('../../config');

module.exports = {
  generateAccessToken(userId) {
    return jsonwebtoken.sign({ userId }, jwt.accessKey, {
      expiresIn: jwt.accessTokenValidity,
    });
  },
  verifyAccessToken(token) {
    return jsonwebtoken.verify(token, jwt.accessKey);
  },
  generateRefreshToken(userId) {
    return jsonwebtoken.sign({ userId }, jwt.refreshKey, {
      expiresIn: jwt.refreshTokenValidity,
    });
  },
  verifyRefreshToken(token) {
    return jsonwebtoken.verify(token, jwt.refreshKey);
  },
  generateOtpToken(otp, email) {
    return jsonwebtoken.sign({ otp, email }, jwt.otpKey, {
      expiresIn: jwt.otpTokenValidity,
    });
  },
  verifyOtpToken(token) {
    return jsonwebtoken.verify(token, jwt.otpKey);
  },
};

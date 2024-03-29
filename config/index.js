const dotenv = require('dotenv');

dotenv.config();

const server = {
  port: process.env.PORT || 3000,
  environment: process.env.NODE_ENV || 'development',
};

const database = {
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'user-management-system',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  dialect: process.env.DB_DIALECT || 'postgres',
};

const jwt = {
  accessKey: process.env.JWT_ACCESS_KEY || 'access',
  accessTokenValidity: process.env.JWT_ACCESS_TOKEN_VALIDITY || '1h',
  refreshKey: process.env.JWT_REFRESH_KEY || 'refresh',
  refreshTokenValidity: process.env.JWT_REFRESH_TOKEN_VALIDITY || '30 days',
  otpKey: process.env.JWT_OTP_KEY || 'otp',
  otpTokenValidity: process.env.JWT_OTP_TOKEN_VALIDITY || '15m',
};

module.exports = {
  server,
  database,
  jwt,
};

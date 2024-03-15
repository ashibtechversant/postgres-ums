const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  server: {
    port: process.env.PORT || 3000,
    environment: process.env.NODE_ENV || 'development',
  },
  database: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME || 'learn',
    port: process.env.DB_PORT || 5432,
  },
};

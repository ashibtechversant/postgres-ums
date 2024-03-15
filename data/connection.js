const { Pool } = require('pg');
const { database } = require('../config');

const pool = new Pool({
  user: database.user,
  host: database.host,
  database: database.name,
  password: database.password,
  port: database.port,
});

module.exports = pool;

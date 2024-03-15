const express = require('express');
const methodNotAllowedMiddleware = require('../middleware/method-not-allowed-middleware');
const responseFormatter = require('../utils/response-formatter');
const studentRouter = require('./student-routes');

const router = express.Router();

router
  .route('/status')
  .get((req, res) => {
    const response = responseFormatter('API is up and running');
    res.json(response);
  })
  .all(methodNotAllowedMiddleware);

router.use('/students', studentRouter);

module.exports = router;

const express = require('express');
const methodNotAllowedMiddleware = require('../middleware/method-not-allowed-middleware');
const responseFormatter = require('../utils/response-formatter');
const userRouter = require('./user-routes');
const adminRouter = require('./admin-routes');

const router = express.Router();

router
  .route('/status')
  .get((req, res) => {
    const response = responseFormatter('API is up and running');
    res.json(response);
  })
  .all(methodNotAllowedMiddleware);

router.use('/users', userRouter);
router.use('/admin', adminRouter);

module.exports = router;

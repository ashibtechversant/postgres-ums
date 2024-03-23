const express = require('express');
const adminController = require('../controllers/admin-controller');
const methodNotAllowedMiddleware = require('../middleware/method-not-allowed-middleware');

const router = express.Router();

router
  .route('/users')
  .post(adminController.registerNewUser)
  .all(methodNotAllowedMiddleware);

module.exports = router;

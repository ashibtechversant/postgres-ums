const express = require('express');
const methodNotAllowedMiddleware = require('../middleware/method-not-allowed-middleware');
const authenticationController = require('../controllers/authentication-controller');

const router = express.Router();

router
  .route('/login')
  .post(authenticationController.login)
  .all(methodNotAllowedMiddleware);

module.exports = router;

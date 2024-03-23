const express = require('express');
const userController = require('../controllers/user-controller');
const methodNotAllowedMiddleware = require('../middleware/method-not-allowed-middleware');

const router = express.Router();

router
  .route('/')
  .get(userController.getAllUsers)
  .all(methodNotAllowedMiddleware);

router
  .route('/:id')
  .get(userController.getUser)
  .all(methodNotAllowedMiddleware);

module.exports = router;

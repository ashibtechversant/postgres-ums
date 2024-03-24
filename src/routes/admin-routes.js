const express = require('express');
const methodNotAllowedMiddleware = require('../middleware/method-not-allowed-middleware');
const authenticationMiddleware = require('../middleware/authentication-middleware');
const authorizationMiddleware = require('../middleware/authorization-middleware');
const adminController = require('../controllers/admin-controller');
const userController = require('../controllers/user-controller');

const router = express.Router();

router.use(authenticationMiddleware);
router.use(authorizationMiddleware('admin'));

router
  .route('/users')
  .post(adminController.registerNewUser)
  .get(userController.getAllUsers)
  .all(methodNotAllowedMiddleware);

router
  .route('/users/:userId')
  .get(userController.getUser)
  .patch(adminController.updateUser)
  .delete(adminController.deleteUser)
  .all(methodNotAllowedMiddleware);

module.exports = router;

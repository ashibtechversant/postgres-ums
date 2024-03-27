const userServices = require('../services/user-services');
const responseFormatter = require('../utils/response-formatter');
const adminRegisterUserSchema = require('../schemas/admin-register-user-schema');
const validateUserId = require('../validation/validate-user-id');
const generateAuthData = require('../utils/generate-auth-data');
const validateNotAdmin = require('../validation/validate-not-admin');

module.exports = {
  async registerNewUser(req, res, next) {
    try {
      const userData = await adminRegisterUserSchema.validateAsync(req.body);
      const user = await userServices.registerNewUser(userData);
      const userAuthData = generateAuthData(user);
      const response = responseFormatter('User registered successfully', {
        user: userAuthData,
      });
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  },
  async deleteUser(req, res, next) {
    try {
      const { userId } = req.params;
      validateUserId(userId);
      validateNotAdmin(userId);
      await userServices.deleteUser(userId);
      const response = responseFormatter('User deleted successfully');
      res.json(response);
    } catch (error) {
      next(error);
    }
  },
  async updateUser(req, res, next) {
    try {
      const { userId } = req.params;
      validateUserId(userId);
      const userData = await adminRegisterUserSchema.validateAsync(req.body);
      const user = await userServices.updateUser(userId, userData);
      const response = responseFormatter('User updated successfully', {
        user,
      });
      res.json(response);
    } catch (error) {
      next(error);
    }
  },
};

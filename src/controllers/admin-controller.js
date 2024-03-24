const userServices = require('../services/user-services');
const responseFormatter = require('../utils/response-formatter');
const adminRegisterUserSchema = require('../schemas/admin-register-user-schema');
const checkUserIdInteger = require('../validation/check-user-id-integer');
const generateAuthData = require('../utils/generate-auth-data');

module.exports = {
  async registerNewUser(req, res, next) {
    try {
      const userData = await adminRegisterUserSchema.validateAsync(req.body);
      const user = await userServices.registerNewUser(userData);
      const userAuthData = generateAuthData(user);
      const response = responseFormatter('User registered successfully', {
        user: userAuthData,
      });
      res.staus(201).json(response);
    } catch (error) {
      next(error);
    }
  },
  async deleteUser(req, res, next) {
    try {
      const { id } = req.params;
      checkUserIdInteger(id);
      const user = await userServices.deleteUser(id);
      const response = responseFormatter('User deleted successfully', {
        user,
      });
      res.json(response);
    } catch (error) {
      next(error);
    }
  },
  async updateUser(req, res, next) {
    try {
      const { id } = req.params;
      checkUserIdInteger(id);
      const userData = await adminRegisterUserSchema.validateAsync(req.body);
      const user = await userServices.updateUser(id, userData);
      const response = responseFormatter('User updated successfully', {
        user,
      });
      res.json(response);
    } catch (error) {
      next(error);
    }
  },
};

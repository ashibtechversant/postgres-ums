const userServices = require('../services/user-services');
const responseFormatter = require('../utils/response-formatter');
const checkUserIntegerId = require('../validation/check-user-id-integer');
const checkUserExists = require('../validation/check-user-exists');

module.exports = {
  async getAllUsers(_, res, next) {
    try {
      const users = await userServices.getAllUsers();
      const response = responseFormatter('All users retrieved successfully', {
        users,
      });
      res.json(response);
    } catch (error) {
      next(error);
    }
  },
  async getUser(req, res, next) {
    try {
      const { id } = req.params;
      checkUserIntegerId(id);
      const user = await userServices.getUserById(id);
      checkUserExists(user);
      const response = responseFormatter('User retrieved successfully', {
        user,
      });
      res.json(response);
    } catch (error) {
      next(error);
    }
  },
};

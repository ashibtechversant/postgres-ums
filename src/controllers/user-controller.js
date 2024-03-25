const userServices = require('../services/user-services');
const responseFormatter = require('../utils/response-formatter');
const checkUserIntegerId = require('../validation/check-user-id-integer');
const checkUserExists = require('../validation/check-user-exists');

module.exports = {
  async getAllUsers(req, res, next) {
    try {
      const { limit, page } = req.query;
      const users = await userServices.getAllUsers(limit, page);
      const response = responseFormatter('All users retrieved successfully', {
        page,
        limit,
        totalCount: users.length,
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

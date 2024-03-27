const userServices = require('../services/user-services');
const responseFormatter = require('../utils/response-formatter');
const validateUserId = require('../validation/validate-user-id');
const validateUser = require('../validation/validate-user');
const validatePaginationParams = require('../validation/validate-pagination-params');

module.exports = {
  async getAllUsers(req, res, next) {
    try {
      const { page = 1, limit = 10, search = '' } = req.query;
      validatePaginationParams(page, limit);
      const offset = (page - 1) * limit;
      const { users, usersCount } =
        await userServices.getUsersWithPaginationAndSearch(
          offset,
          limit,
          search
        );
      const response = responseFormatter('Users retrieved successfully', {
        page: +page,
        limit: +limit,
        usersCount,
        users,
      });
      res.json(response);
    } catch (error) {
      next(error);
    }
  },
  async getUser(req, res, next) {
    try {
      const { userId } = req.params;
      validateUserId(userId);
      const user = await userServices.getUserById(userId);
      validateUser(user);
      const response = responseFormatter('User retrieved successfully', {
        user,
      });
      res.json(response);
    } catch (error) {
      next(error);
    }
  },
};

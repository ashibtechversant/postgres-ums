const userServices = require('../services/user-services');
const checkRoleAuthorization = require('../validation/check-role-authorization');

module.exports = (role) => async (req, _, next) => {
  try {
    const { userId } = req.payload;
    const user = await userServices.getUserById(userId);
    checkRoleAuthorization(user.role, role);
    next();
  } catch (error) {
    next(error);
  }
};

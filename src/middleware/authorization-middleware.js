const userServices = require('../services/user-services');
const validateRoleAuthorization = require('../validation/validate-role-authorization');

module.exports = (role) => async (req, _, next) => {
  try {
    const { userId } = req.payload;
    const user = await userServices.getUserById(userId);
    validateRoleAuthorization(user.role, role);
    next();
  } catch (error) {
    next(error);
  }
};

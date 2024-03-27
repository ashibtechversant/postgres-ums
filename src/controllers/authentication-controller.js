const userLoginSchema = require('../schemas/user-login-schema');
const userServices = require('../services/user-services');
const validateLoginCredential = require('../validation/validate-login-credential');
const responseFormatter = require('../utils/response-formatter');
const generateAuthData = require('../utils/generate-auth-data');

module.exports = {
  async login(req, res, next) {
    try {
      const loginData = await userLoginSchema.validateAsync(req.body);
      const user = await userServices.getUserByEmail(loginData.email);
      validateLoginCredential(user);
      const isPasswordValid = await userServices.verifyPassword(
        loginData.password,
        user.password
      );
      validateLoginCredential(isPasswordValid);
      const userAuthData = generateAuthData(user);
      const response = responseFormatter('login successful', {
        user: userAuthData,
      });
      res.json(response);
    } catch (error) {
      next(error);
    }
  },
};

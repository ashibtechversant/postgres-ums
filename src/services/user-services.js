const User = require('../../db/models/user');

module.exports = {
  async getAllUsers(limit = 10, page = 1) {
    const users = await User.findAll({ offset: page, limit });
    return users;
  },
  async getUserById(id) {
    const user = await User.findByPk(id);
    return user;
  },
  async getUserByEmail(email) {
    const user = await User.findOne({ where: { email } });
    return user;
  },
  async verifyPassword(password, hashedPassword) {
    const isPasswordValid = await User.verifyPassword(password, hashedPassword);
    return isPasswordValid;
  },
  async registerNewUser(user) {
    const createdUser = await User.create(user);
    return createdUser;
  },
  async updateUser(user) {
    const updatedUser = await User.update(user, { where: { id: user.id } });
    return updatedUser;
  },
};

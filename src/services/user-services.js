const User = require('../../db/models/user');

module.exports = {
  async getAllUsers() {
    const users = await User.findAll();
    return users;
  },
  async getUserById(id) {
    const user = await User.findByPk(id);
    return user;
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

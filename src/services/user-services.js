const { Op, fn, col, where } = require('sequelize');
const User = require('../../db/models/user');

const attributes = [
  'id',
  'firstName',
  'lastName',
  'role',
  'email',
  'createdAt',
  'updatedAt',
];

module.exports = {
  async getUsersWithPaginationAndSearch(offset, limit, search) {
    const formattedSearchTerm = search.trim().replace(/\s+/g, ' ');
    const { rows: users, count: usersCount } = await User.findAndCountAll({
      offset,
      limit,
      where: {
        [Op.or]: [
          where(fn('CONCAT', col('firstName'), ' ', col('lastName')), {
            [Op.iLike]: `%${formattedSearchTerm}%`,
          }),
          { email: { [Op.iLike]: `%${formattedSearchTerm}%` } },
        ],
      },
    });
    return { users, usersCount };
  },
  async getUserById(id) {
    const user = await User.findByPk(id, { attributes });
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
  async deleteUser(id) {
    const deletedUser = await User.destroy({ where: { id } });
    return deletedUser;
  },
};

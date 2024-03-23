const { DataTypes } = require('sequelize');
const { sequelize } = require('../connection');
const bcryptUtils = require('../utils/bcrypt-utils');

const User = sequelize.define(
  'user',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    role: {
      allowNull: false,
      type: DataTypes.ENUM('admin', 'supervisor', 'agent', 'qc', 'qa'),
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
  },
  { paranoid: true, modelName: 'user' }
);

User.beforeCreate(async (user) => {
  const newUser = user;
  const hashedPassword = await bcryptUtils.hashPassword(newUser.password);
  newUser.password = hashedPassword;
});

module.exports = User;

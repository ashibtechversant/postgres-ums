const studentServices = require('../services/student-services');
const responseFormatter = require('../utils/response-formatter');

module.exports = {
  async getAllStudents(_, res, next) {
    try {
      const users = await studentServices.getAllStudents();
      const response = responseFormatter(
        'All students retrieved successfully',
        { users }
      );
      res.json(response);
    } catch (error) {
      next(error);
    }
  },
  async getStudent(req, res, next) {
    try {
      const user = await studentServices.getStudentById(req.params.id);
      const response = responseFormatter('Student retrieved successfully', {
        user,
      });
      res.json(response);
    } catch (error) {
      next(error);
    }
  },
};

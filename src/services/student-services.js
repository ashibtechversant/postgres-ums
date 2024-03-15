const pool = require('../../data/connection');
const studentQueries = require('../queries/student-queries');

module.exports = {
  async getAllStudents() {
    const { rows } = await pool.query(studentQueries.getAllStudents);
    return rows;
  },
  async getStudentById(id) {
    const studentId = parseInt(id, 10);
    const { rows } = await pool.query(studentQueries.getStudentById, [
      studentId,
    ]);
    return rows[0];
  },
};

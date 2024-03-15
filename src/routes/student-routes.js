const express = require('express');
const studentController = require('../controllers/student-controller');
const methodNotAllowedMiddleware = require('../middleware/method-not-allowed-middleware');

const router = express.Router();

router
  .route('/')
  .get(studentController.getAllStudents)
  .all(methodNotAllowedMiddleware);

router
  .route('/:id')
  .get(studentController.getStudent)
  .all(methodNotAllowedMiddleware);

module.exports = router;

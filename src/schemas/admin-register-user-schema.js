const Joi = require('joi');
const capitalizeStringWords = require('../utils/capitalize-string-words');

module.exports = Joi.object({
  firstName: Joi.string()
    .trim()
    .required()
    .min(2)
    .max(30)
    .pattern(/^[a-zA-Z]+$/)
    .custom(capitalizeStringWords)
    .messages({
      'any.required': 'First Name is required.',
      'string.empty': 'First Name should not be empty.',
      'string.min': 'First Name must be at least {#limit} characters long.',
      'string.max':
        'First Name must be less than or equal to {#limit} characters long.',
      'string.pattern.base': 'First Name must only contain letters.',
    }),
  lastName: Joi.string()
    .trim()
    .required()
    .min(2)
    .max(30)
    .pattern(/^[a-zA-Z\s]+$/)
    .custom(capitalizeStringWords)
    .messages({
      'any.required': 'Last Name is required.',
      'string.empty': 'Last Name should not be empty.',
      'string.min': 'Last Name must be at least {#limit} characters long.',
      'string.max':
        'Last Name must be less than or equal to {#limit} characters long.',
      'string.pattern.base': 'Last Name must only contain letters and space.',
    }),
  email: Joi.string().trim().required().email().lowercase().messages({
    'any.required': 'Email is required.',
    'string.empty': 'Email should not be empty.',
    'string.email': 'Email must be a valid email address.',
  }),
  role: Joi.string()
    .trim()
    .required()
    .valid('supervisor', 'agent', 'qc', 'qa')
    .messages({
      'any.required': 'Role is required.',
      'string.empty': 'Role should not be empty.',
      'any.only': 'Role must be one of supervisor, agent, qc or qa.',
    }),
  password: Joi.string()
    .trim()
    .required()
    .min(8)
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    )
    .messages({
      'any.required': 'Password is required.',
      'string.empty': 'Password should not be empty.',
      'string.min': 'Password must be at least {#limit} characters long.',
      'string.pattern.base':
        'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character (@$!%*?&).',
    }),
});

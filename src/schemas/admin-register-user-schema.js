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
      'string.empty': `First Name is required.`,
      'string.min': `First Name must be at least {#limit} characters long.`,
      'string.max': `First Name must be less than or equal to {#limit} characters long.`,
      'string.pattern.base': `First Name must only contain letters.`,
    }),
  lastName: Joi.string()
    .trim()
    .required()
    .min(2)
    .max(30)
    .pattern(/^[a-zA-Z\s]+$/)
    .custom(capitalizeStringWords)
    .messages({
      'string.empty': `Last Name is required.`,
      'string.min': `Last Name must be at least {#limit} characters long.`,
      'string.max': `Last Name must be less than or equal to {#limit} characters long.`,
      'string.pattern.base': `Last Name must only contain letters and space.`,
    }),
  email: Joi.string().trim().required().email().lowercase().messages({
    'string.empty': `Email is required.`,
    'string.email': `Email must be a valid email address.`,
  }),
  role: Joi.string()
    .trim()
    .required()
    .valid('supervisor', 'agent', 'qc', 'qa')
    .messages({
      'string.empty': `Role is required.`,
      'string.valid': `Role must be one of supervisor, agent, qc or qa.`,
    }),
  password: Joi.string()
    .trim()
    .required()
    .min(8)
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    )
    .messages({
      'string.empty': `Password is required.`,
      'string.min': `Password must be at least {#limit} characters long.`,
      'string.pattern.base': `Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character (@$!%*?&).`,
    }),
});

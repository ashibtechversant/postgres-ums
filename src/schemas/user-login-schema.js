const Joi = require('joi');

module.exports = Joi.object({
  email: Joi.string().trim().required().email().lowercase().messages({
    'any.required': 'Email is required.',
    'string.empty': 'Email should not be empty.',
    'string.email': 'Email must be a valid email address.',
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

import Joi from "joi";

export const createRegionSchema = Joi.object({
  name: Joi.string().min(2).max(100).required().messages({
    "string.empty": "Region name is required",
    "string.min": "Region name must be at least 2 characters",
    "string.max": "Region name cannot exceed 100 characters",
    "any.required": "Region name is required",
  }),

  code: Joi.string().length(3).required().messages({
    "string.empty": "Code is required",
    "string.length": "Code must be exactly 3 characters",
    "any.required": "Code is required",
  }),

  status: Joi.string()
    .valid("active", "inactive", "blocked")
    .optional()
    .messages({
      "any.only": "Status must be active, inactive, or blocked",
    }),
});
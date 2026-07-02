import Joi from "joi";

export const createPackageSchema = Joi.object({
  title: Joi.string().min(2).max(100).required().messages({
    "string.empty": "Title is required",
    "string.min": "Title must be at least 2 characters",
    "string.max": "Title cannot exceed 100 characters",
    "any.required": "Title is required",
  }),

  price: Joi.number().positive().required().messages({
    "number.base": "Price must be a number",
    "number.positive": "Price must be greater than 0",
    "any.required": "Price is required",
  }),

  description: Joi.string().min(2).max(4000).required().messages({
    "string.empty": "Description is required",
    "string.min": "Description must be at least 2 characters",
    "string.max": "Description cannot exceed 4000 characters",
    "any.required": "Description is required",
  }),

  status: Joi.string()
    .valid("active", "inactive", "blocked")
    .optional()
    .messages({
      "any.only": "Status must be active, inactive, or blocked",
    }),
});
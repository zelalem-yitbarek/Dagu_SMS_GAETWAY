import Joi from "joi";

export const createCitySchema = Joi.object({
  name: Joi.string().min(2).max(100).required().messages({
    "string.empty": "City name is required",
    "string.min": "City name must be at least 2 characters",
    "string.max": "City name cannot exceed 100 characters",
    "any.required": "City name is required",
  }),

  region: Joi.string()
    .pattern(/^[0-9a-fA-F]{24}$/)
    .required()
    .messages({
      "string.empty": "Region is required",
      "string.pattern.base": "Region must be a valid MongoDB ObjectId",
      "any.required": "Region is required",
    }),
});
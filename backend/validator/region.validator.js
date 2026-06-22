import Joi from "joi";

export const createRegionSchema=Joi.object({
    name:Joi.string.min(10).max(20).required().messages({
      "string.empty": "Region name is required",
      "string.min": "Region name must be at least 2 characters",
      "string.max": "Region name cannot exceed 100 characters",
      "any.required": "Region name is required",
    }),
    code:Joi.string.min(1).max(3).required().messages({
       "string.empty": "Code is required",
      "string.min": "Code must be at least 1 characters",
      "string.max": "Code cannot exceed 3 characters",
      "any.required": "code is required", 
    }),
    status:Joi.string().valid("active", "inactive", "blocked").optional().
    message({
        "any.only": "Status must be active, inactive, or blocked",
    })
})

export const updateRegionSchema=Joi.object({
     name: Joi.string().trim().min(10).max(20),
     code: Joi.string().trim().length(3).uppercase(),
     status: Joi.string()
    .valid("active", "inactive", "blocked"),
}).min(1)
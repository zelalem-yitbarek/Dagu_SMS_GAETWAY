import Joi from "joi";

export const createBlogSchema  = Joi.object({
    title: Joi.string().min(5).max(200).required().messages({
        "string.empty": "Title is required",
        "string.min": "Title must be at least 5 characters",
        "string.max": "Title must not exceed 200 characters",
        "string.unique": "Title must be unique"
    }),
    content: Joi.string().min(10).max(40000).required().messages({
        "string.empty": "Content is required",
        "string.min": "Content must be at least 10 characters",
        "string.max": "Content must not exceed 40000 characters",
    }),
    slug: Joi.string().min(5).max(200).required().messages({
        "string.empty": "Slug is required",
        "string.min": "Slug must be at least 5 characters",
        "string.max": "Slug must not exceed 200 characters",
        "string.unique": "Slug must be unique"
    }),
});
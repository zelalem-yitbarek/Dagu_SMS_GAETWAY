import express from "express";
import { createBlog, getBlogs, getBlogById } from "../controller/blog.controller.js";
import { createBlogSchema } from "../validator/blog.validator.js";
import { validate } from "../middleware/validate.middleware.js";

const router = express.Router();

router.post("/",
  validate(createBlogSchema),
  createBlog
);
export default router;
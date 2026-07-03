import Blogs from "../models/blog.model.js";
import ApiError from "../utils/api-error.js";
import slugify from "slugify";

// Create Blog
export const createBlog = async (req, res, next) => {
  try {
    const { title, content, author, published } = req.body;

    // Generate slug from title
    const slug = slugify(title, {
      lower: true,
      strict: true,
      trim: true,
    });

    // Check if title already exists
    const existingTitle = await Blogs.findOne({ title });

    if (existingTitle) {
      return next(
        new ApiError("Blog with the same title already exists", 409)
      );
    }

    // Check if slug already exists
    const existingSlug = await Blogs.findOne({ slug });

    if (existingSlug) {
      return next(
        new ApiError("Blog slug already exists. Please choose another title.", 409)
      );
    }

    const blog = await Blogs.create({
      title,
      slug,
      content,
      author,
      published,
    });

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: blog,
    });
  } catch (error) {
    next(error);
  }
};

// Get All Blogs
export const getBlogs = async (req, res, next) => {
  try {
    const blogs = await Blogs.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: "Blogs fetched successfully",
      data: blogs,
    });
  } catch (error) {
    next(error);
  }
};

// Get Blog By ID
export const getBlogById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const blog = await Blogs.findById(id);

    if (!blog) {
      return next(new ApiError("Blog not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "Blog fetched successfully",
      data: blog,
    });
  } catch (error) {
    next(error);
  }
};
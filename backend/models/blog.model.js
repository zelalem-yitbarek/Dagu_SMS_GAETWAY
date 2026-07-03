import mongoose from "mongoose";
import slugify from "slugify";

const blogsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true,
    },
    slug: {
        type: String,
        unique: true,
        required: [true, "Slug is required"],
        trim: true,
    },
    content: {
        type: String,
        required: [true, "Content is required"],
        trim: true,
    },
    author: {
        type: String,
        enum: ["anonymous", "user"],
        default: "anonymous",
        trim: true
    },
    published: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
});

const Blogs = mongoose.model("Blogs", blogsSchema);
export default Blogs;

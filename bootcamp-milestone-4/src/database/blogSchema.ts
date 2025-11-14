import mongoose, { Schema } from "mongoose";

// TypeScript type for a comment
export type IComment = {
  user: string;
  comment: string;
  time: Date;
};

// TypeScript type for a blog post
export type IBlog = {
  title: string;
  slug: string;
  date: Date;
  description: string;
  content: string;
  image: string;
  image_alt: string;
  comments: IComment[]; // Array of comments
};

// Mongoose schema for comments
const commentSchema = new Schema<IComment>({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  time: { type: Date, required: true, default: Date.now },
});

// Mongoose schema for blog
const blogSchema = new Schema<IBlog>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  image: { type: String, required: true },
  image_alt: { type: String, required: true },
  content: { type: String, required: true },
  comments: { type: [commentSchema], default: [] }, // Array of comments
});

// Defining the collection and model
const Blog = mongoose.models['blogs'] || mongoose.model('blogs', blogSchema);

export default Blog;
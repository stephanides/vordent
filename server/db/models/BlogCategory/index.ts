import mongoose, { Document } from 'mongoose';

export interface IBlogCategory extends Document {
  title: string;
}

const BlogCategorySchema = new mongoose.Schema({
  title: String,
});

const BlogCategory = mongoose.model<IBlogCategory>(
  'BlogCategory',
  BlogCategorySchema
);

export default BlogCategory;

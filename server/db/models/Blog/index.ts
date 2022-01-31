import mongoose, { Document } from 'mongoose';

export interface IBlog extends Document {
  image: object;
  title: string;
  category: string;
  description: string;
  dateCreated: Date;
  dateDeleted: Date;
  dateModified: Date;
  deleted: boolean;
  slug: string;
  content: string;
}

const BlogSchema = new mongoose.Schema({
  image: Object,
  title: String,
  category: String,
  description: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  dateDeleted: Date,
  dateModified: Date,
  deleted: {
    default: false,
    type: Boolean,
  },
  slug: String,
  content: String,
});

const Blog = mongoose.model<IBlog>('Blog', BlogSchema);

export default Blog;

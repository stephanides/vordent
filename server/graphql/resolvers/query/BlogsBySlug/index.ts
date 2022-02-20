import mongoose from 'mongoose';
import Blog, { IBlog } from '../../../../db/models/Blog';
import BlogCategory from '../../../../db/models/BlogCategory';
import ModError from '../../utils/error';

type BlogBySlugResponse = {
  blog: IBlog;
  categoryTitle: string;
};

const blogBySlug: (
  root: any,
  args: any,
  ctx: any
) => Promise<BlogBySlugResponse> = async (root, { slug }, ctx) => {
  const blog = await Blog.findOne({ slug });

  if (!blog) {
    throw new ModError(404, 'Blog not exist');
  }

  const category = await BlogCategory.findOne({
    _id: mongoose.Types.ObjectId(blog.category),
  });

  const categoryTitle = category.title;

  return { blog, categoryTitle };
};

export default blogBySlug;

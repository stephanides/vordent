/* eslint-disable no-nested-ternary */
import Blog, { IBlog } from '../../../../db/models/Blog';

const blogs: (root: any, args: any, ctx: any) => Promise<IBlog[]> = async (
  root,
  { categoryId },
  ctx
) => {
  try {
    const blogs = await Blog.find();

    return blogs.reverse();
  } catch (err) {
    throw new Error(err);
  }
};

export default blogs;

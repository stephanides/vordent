import Blog, { IBlog } from '../../../../db/models/Blog';
import ModError from '../../utils/error';

const blogBySlug: (root: any, args: any, ctx: any) => Promise<IBlog> = async (
  root,
  { slug },
  ctx
) => {
  const blog = await Blog.findOne({ slug });

  if (!blog) {
    throw new ModError(404, 'Blog not exist');
  }

  return blog;
};

export default blogBySlug;

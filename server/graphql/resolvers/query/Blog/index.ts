import mongoose from 'mongoose';
import Blog, { IBlog } from '../../../../db/models/Blog';
import ModError from '../../utils/error';

const blog: (root: any, args: any, ctx: any) => Promise<IBlog> = async (
  root,
  { id },
  ctx
) => {
  const exist = await Blog.findOne({ _id: mongoose.Types.ObjectId(id) });

  if (!exist) {
    throw new ModError(404, 'Blog not exist');
  }

  return exist;
};

export default blog;

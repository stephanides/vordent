import mongoose from 'mongoose';
import Blog, { IBlog } from '../../../../db/models/Blog';
import ModError from '../../utils/error';

const removeBlog: (root: any, args: any, ctx: any) => Promise<string> = async (
  root,
  { _id },
  ctx
) => {
  try {
    const blogExist: IBlog = await Blog.findOne({
      _id: mongoose.Types.ObjectId(_id),
    });

    if (!blogExist) {
      throw new ModError(404, 'Blog not exist');
    }

    await Blog.deleteOne({ _id: mongoose.Types.ObjectId(_id) });

    return `Blog with _id: ${_id} has been successfuly removed`;
  } catch (err) {
    throw new Error(err);
  }
};

export default removeBlog;

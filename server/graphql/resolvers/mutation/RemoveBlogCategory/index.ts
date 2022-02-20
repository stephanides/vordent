import mongoose from 'mongoose';
import BlogCategory, {
  IBlogCategory,
} from '../../../../db/models/BlogCategory';
import ModError from '../../utils/error';

const removeBlogCategory: (
  root: any,
  args: any,
  ctx: any
) => Promise<string> = async (root, { _id }, ctx) => {
  try {
    const categoryExist: IBlogCategory = await BlogCategory.findOne({
      _id: mongoose.Types.ObjectId(_id),
    });

    if (!categoryExist) {
      throw new ModError(404, 'Category not exist');
    }

    await BlogCategory.deleteOne({ _id: mongoose.Types.ObjectId(_id) });

    return `Category with _id: ${_id} has been successfuly removed.`;
  } catch (err) {
    throw new Error(err);
  }
};

export default removeBlogCategory;

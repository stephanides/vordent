import mongoose from 'mongoose';
import BlogCategory, {
  IBlogCategory,
} from '../../../../db/models/BlogCategory';
import { storeFile } from '../../utils';
import ModError from '../../utils/error';

const updateBlogCategory: (
  root: any,
  args: any,
  ctx: any
) => Promise<any> = async (root, { _id, blogCategoryInput }, ctx) => {
  const { title } = blogCategoryInput;
  try {
    const categoryExist = await BlogCategory.findOne({
      _id: mongoose.Types.ObjectId(_id),
    });

    if (!categoryExist) {
      throw new ModError(404, 'Category not exist');
    }

    const categoryData = blogCategoryInput;

    const updatedCategoryData: IBlogCategory =
      await BlogCategory.findOneAndUpdate(
        { _id: mongoose.Types.ObjectId(_id) },
        { $set: { title: categoryData.title } },
        { new: true }
      );

    const { __v, ...result } = updatedCategoryData.toObject();

    return result;
  } catch (err) {
    throw new Error(err);
  }
};

export default updateBlogCategory;

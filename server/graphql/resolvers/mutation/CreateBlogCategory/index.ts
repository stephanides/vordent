import BlogCategory from '../../../../db/models/BlogCategory';
import { storeFile } from '../../utils';
import ModError from '../../utils/error';

const createBlogCategory: (
  root: any,
  args: any,
  ctx: any
) => Promise<any> = async (root, { blogCategoryInput }, ctx) => {
  const { title } = blogCategoryInput;
  try {
    const categoryExist = await BlogCategory.findOne({ title });

    if (categoryExist) {
      throw new ModError(403, 'Category allready exist');
    }

    const categoryData = new BlogCategory(blogCategoryInput);

    await BlogCategory.create(categoryData);

    const { __v, ...result } = categoryData.toObject();

    return result;
  } catch (err) {
    throw new Error(err);
  }
};

export default createBlogCategory;

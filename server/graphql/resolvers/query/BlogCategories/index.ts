import BlogCategory, {
  IBlogCategory,
} from '../../../../db/models/BlogCategory';

const blogCategories: () => Promise<IBlogCategory[]> = async () => {
  try {
    const result = (await BlogCategory.find()) || [];

    return result;
  } catch (err) {
    throw new Error(err);
  }
};

export default blogCategories;

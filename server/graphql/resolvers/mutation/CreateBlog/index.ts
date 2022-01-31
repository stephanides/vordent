/* eslint-disable no-underscore-dangle */
import Blog, { IBlog } from '../../../../db/models/Blog';
import { storeFile } from '../../utils';
import ModError from '../../utils/error';

const createBlog: (root: any, args: any, ctx: any) => Promise<any> = async (
  root,
  { blogInput },
  ctx
) => {
  try {
    const { slug, title, image } = blogInput;

    const blogExist: IBlog = await Blog.findOne({ title });

    if (blogExist) {
      throw new ModError(403, 'Blog already exist.');
    }

    const blogData = new Blog(blogInput);

    //store image

    if (image && (image as any).base64) {
      const fileData = {
        fileName: (image as any).title,
        fileBase64Data: (image as any).base64,
        dirName: `blogy/${slug}`,
        extension: (image as any).ext,
      };

      const imgPath = await storeFile(fileData);

      const { base64, ...restImgData } = image as any;
      const imageData = {
        ...restImgData,
        path: imgPath,
      };

      blogData.image = imageData;
    }

    const newProduct = await Blog.create(blogData);

    const { __v, ...result } = newProduct.toObject();

    return result;
  } catch (err) {
    throw new Error(err);
  }
};

export default createBlog;

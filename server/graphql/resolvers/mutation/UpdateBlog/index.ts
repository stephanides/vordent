/* eslint-disable no-underscore-dangle */
import mongoose from 'mongoose';
import Blog, { IBlog } from '../../../../db/models/Blog';
import { storeFile } from '../../utils';
import ModError from '../../utils/error';

const updateBlog: (root: any, args: any, ctx: any) => Promise<any> = async (
  root,
  { id, blogInput },
  ctx
) => {
  try {
    const { slug, title, image } = blogInput;

    const blogExist: IBlog = await Blog.findOne({
      _id: mongoose.Types.ObjectId(id),
    });

    if (!blogExist) {
      throw new ModError(403, 'Blog not exist.');
    }

    const blogData = blogInput;

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

    const updatedBlog: IBlog = await Blog.findOneAndUpdate(
      { _id: mongoose.Types.ObjectId(id) },
      {
        $set: {
          image: blogData.image,
          title: blogData.title,
          category: blogData.category,
          description: blogData.description,
          slug: blogData.slug,
          content: blogData.content,
          readingTime: blogData.readingTime,
        },
      },
      { new: true }
    );

    const { __v, ...result } = updatedBlog.toObject();

    return result;
  } catch (err) {
    throw new Error(err);
  }
};

export default updateBlog;

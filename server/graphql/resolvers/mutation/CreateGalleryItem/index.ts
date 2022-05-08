/* eslint-disable no-underscore-dangle */
import GalleryItem, { IGalleryItem } from '../../../../db/models/GalleryItem';
import { storeFile } from '../../utils';
import ModError from '../../utils/error';

const createGalleryItem: (
  root: any,
  args: any,
  ctx: any
) => Promise<any> = async (root, { galleryItemInput }, ctx) => {
  try {
    const { image } = galleryItemInput;

    const galleryItemData = new GalleryItem(galleryItemInput);

    //store image

    const fileData = {
      fileName: (image as any).title,
      fileBase64Data: (image as any).base64,
      dirName: `gallery`,
      extension: (image as any).ext,
    };

    const imgPath = await storeFile(fileData);

    const { base64, ...restImgData } = image as any;
    const imageData = {
      ...restImgData,
      path: imgPath,
    };

    galleryItemData.image = imageData;

    const newGalleryItem = await GalleryItem.create(galleryItemData);

    const { __v, ...result } = newGalleryItem.toObject();

    return result;
  } catch (err) {
    throw new Error(err);
  }
};

export default createGalleryItem;

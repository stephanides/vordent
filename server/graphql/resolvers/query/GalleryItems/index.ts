/* eslint-disable no-nested-ternary */
import GalleryItem, { IGalleryItem } from '../../../../db/models/GalleryItem';

const galleryItems: () => Promise<IGalleryItem[]> = async () => {
  try {
    const items = await GalleryItem.find();

    return items.reverse();
  } catch (err) {
    throw new Error(err);
  }
};

export default galleryItems;

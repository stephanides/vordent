import mongoose from 'mongoose';
import GalleryItem, { IGalleryItem } from '../../../../db/models/GalleryItem';
import ModError from '../../utils/error';

const removeGalleryItem: (
  root: any,
  args: any,
  ctx: any
) => Promise<string> = async (root, { _id }, ctx) => {
  try {
    const itemExist: IGalleryItem = await GalleryItem.findOne({
      _id: mongoose.Types.ObjectId(_id),
    });

    if (!itemExist) {
      throw new ModError(404, 'Item not exist');
    }

    await GalleryItem.deleteOne({ _id: mongoose.Types.ObjectId(_id) });

    return `Item with _id: ${_id} has been successfuly removed`;
  } catch (err) {
    throw new Error(err);
  }
};

export default removeGalleryItem;

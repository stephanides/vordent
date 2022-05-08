import mongoose, { Document } from 'mongoose';

export interface IGalleryItem extends Document {
  image: object;
}

const GalleryItemSchema = new mongoose.Schema({
  image: Object,
});

const GalleryItem = mongoose.model<IGalleryItem>(
  'GalleryItem',
  GalleryItemSchema
);

export default GalleryItem;

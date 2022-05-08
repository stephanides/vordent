import { gql } from 'apollo-server-express';

const GalleryItem = gql`
  input GalleryItemInput {
    image: GalleryItemImageTypeInput
  }

  input GalleryItemImageTypeInput {
    base64: String
    ext: String
    path: String
    size: String
    title: String
  }

  type GalleryItemImageType {
    path: String
    ext: String
    size: String
    title: String
  }

  type GalleryItem {
    _id: String!
    image: GalleryItemImageType!
  }
`;

export default GalleryItem;

import { gql } from 'apollo-server-express';

const Blog = gql`
  input BlogInput {
    image: BlogImageTypeInput
    title: String!
    category: String
    description: String
    dateCreated: String
    dateDeleted: String
    dateModified: String
    deleted: Boolean
    slug: String
    content: String
  }

  input BlogImageTypeInput {
    base64: String
    ext: String
    path: String
    size: String
    title: String
  }

  type BlogImageType {
    path: String
    ext: String
    size: String
    title: String
  }

  type Blog {
    _id: String!
    image: BlogImageType!
    title: String!
    category: String
    description: String
    dateCreated: String
    dateDeleted: String
    dateModified: String
    deleted: Boolean
    slug: String
    content: String
  }
`;

export default Blog;

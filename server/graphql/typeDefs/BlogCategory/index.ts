import { gql } from 'apollo-server-express';

const BlogCategory = gql`
  input BlogCategoryInput {
    title: String
  }

  type BlogCategory {
    _id: String!
    title: String!
  }
`;

export default BlogCategory;

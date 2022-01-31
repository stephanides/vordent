import { gql } from 'apollo-server-express';

const rootTypeDefs = gql`
  type Query {
    users: [User]

    blog(id: String!): Blog
    blogBySlug(slug: String!): Blog
    blogs(categoryId: String): [Blog]
  }

  type Mutation {
    loginUser(userLoginInput: UserLoginInput!): UserLogged
    registerUser(userRegInput: UserRegInput!): User
    updateUser(id: String, confirmed: Boolean): User

    createBlog(blogInput: BlogInput!): Blog
    updateBlog(id: String!, blogInput: BlogInput!): Blog
    removeBlog(_id: String!): String

    sendContactForm(contactFormData: ContactFormInput!): String

    validateUser(token: String!): Boolean
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

export default rootTypeDefs;

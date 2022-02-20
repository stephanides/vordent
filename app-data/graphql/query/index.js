import gql from 'graphql-tag';

export const USERS_QUERY = gql`
  query users {
    users {
      _id
      confirmed
      email
      firstName
      lastName
    }
  }
`;

export const BLOGCATEGORIES_QUERY = gql`
  query blogCategories {
    blogCategories {
      _id
      title
    }
  }
`;

export const BLOGS_QUERY = gql`
  query blogs {
    blogs {
      _id
      image {
        path
      }
      title
      category
      description
      dateCreated
      dateDeleted
      dateModified
      deleted
      slug
      content
      readingTime
    }
  }
`;

export const BLOG_QUERY = gql`
  query blog($id: String!) {
    blog(id: $id) {
      _id
      image {
        path
      }
      title
      category
      description
      dateCreated
      dateDeleted
      dateModified
      deleted
      slug
      content
      readingTime
    }
  }
`;

export const BLOG_BY_SLUG_QUERY = gql`
  query blogBySlug($slug: String!) {
    blogBySlug(slug: $slug) {
      blog {
        _id
        image {
          path
        }
        title
        category
        description
        dateCreated
        dateDeleted
        dateModified
        deleted
        slug
        content
        readingTime
      }
      categoryTitle
    }
  }
`;

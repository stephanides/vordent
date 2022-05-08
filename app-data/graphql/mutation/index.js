import gql from 'graphql-tag';

export const LOGIN_USER_MUTATION = gql`
  mutation loginUser($userLoginInput: UserLoginInput!) {
    loginUser(userLoginInput: $userLoginInput) {
      _id
      email
      firstName
      lastName
      role
      token
      confirmed
    }
  }
`;

export const REGISTER_USER_MUTATION = gql`
  mutation registerUser($userRegInput: UserRegInput!) {
    registerUser(userRegInput: $userRegInput) {
      _id
      email
      firstName
      lastName
      role
      confirmed
    }
  }
`;

export const UPDATE_USER_MUTATION = gql`
  mutation updateUser($id: String!, $confirmed: Boolean!) {
    updateUser(id: $id, confirmed: $confirmed) {
      _id
      confirmed
      email
      firstName
      lastName
    }
  }
`;

export const SEND_CONTACT_FORM_MUTATION = gql`
  mutation sendContactForm($contactFormData: ContactFormInput!) {
    sendContactForm(contactFormData: $contactFormData)
  }
`;

export const CREATE_BLOGCATEGORY_MUTATION = gql`
  mutation createBlogCategory($blogCategoryInput: BlogCategoryInput!) {
    createBlogCategory(blogCategoryInput: $blogCategoryInput) {
      _id
      title
    }
  }
`;

export const UPDATE_BLOGCATEGORY_MUTATION = gql`
  mutation updateBlogCategory(
    $_id: String!
    $blogCategoryInput: BlogCategoryInput!
  ) {
    updateBlogCategory(_id: $_id, blogCategoryInput: $blogCategoryInput) {
      _id
      title
    }
  }
`;

export const REMOVE_BLOGCATEGORY_MUTATION = gql`
  mutation removeBlogCategory($_id: String!) {
    removeBlogCategory(_id: $_id)
  }
`;

export const CREATE_BLOG_MUTATION = gql`
  mutation createBlog($blogInput: BlogInput!) {
    createBlog(blogInput: $blogInput) {
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

export const UPDATE_BLOG_MUTATION = gql`
  mutation updateBlog($id: String!, $blogInput: BlogInput!) {
    updateBlog(id: $id, blogInput: $blogInput) {
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

export const REMOVE_BLOG_MUTATION = gql`
  mutation removeBlog($_id: String!) {
    removeBlog(_id: $_id)
  }
`;

export const CREATE_GALLERY_ITEM_MUTATION = gql`
  mutation createGalleryItem($galleryItemInput: GalleryItemInput!) {
    createGalleryItem(galleryItemInput: $galleryItemInput) {
      _id
      image {
        path
        title
      }
    }
  }
`;

export const REMOVE_GALLERY_ITEM_MUTATION = gql`
  mutation removeGalleryItem($_id: String!) {
    removeGalleryItem(_id: $_id)
  }
`;

// queries
import users from './query/Users';

// mutations

import loginUser from './mutation/LoginUser';
import registerUser from './mutation/RegisterUser';
import updateUser from './mutation/UpdateUser';

import createBlog from './mutation/CreateBlog';
import updateBlog from './mutation/UpdateBlog';
import removeBlog from './mutation/RemoveBlog';
import blogs from './query/Blogs';
import blog from './query/Blog';
import blogBySlug from './query/BlogsBySlug';
import createBlogCategory from './mutation/CreateBlogCategory';
import updateBlogCategory from './mutation/UpdateBlogCategory';
import removeBlogCategory from './mutation/RemoveBlogCategory';
import { sendContactForm } from './mutation/ContactForm';

import validateUser from './mutation/ValidateUser';
import blogCategories from './query/BlogCategories';
import galleryItems from './query/GalleryItems';
import createGalleryItem from './mutation/CreateGalleryItem';
import removeGalleryItem from './mutation/RemoveGalleryItem';

const resolvers = {
  Query: {
    users: async (root: any, args: any, ctx: any) => users(root, args, ctx),
    blogs: async (root: any, args: any, ctx: any) => blogs(root, args, ctx),
    blog: async (root: any, args: any, ctx: any) => blog(root, args, ctx),
    blogBySlug: async (root: any, args: any, ctx: any) =>
      blogBySlug(root, args, ctx),
    blogCategories: async () => blogCategories(),
    galleryItems: async () => galleryItems(),
  },
  Mutation: {
    loginUser: async (root: any, args: any, ctx: any) =>
      loginUser(root, args, ctx),
    registerUser: async (root: any, args: any, ctx: any) =>
      registerUser(root, args, ctx),
    updateUser: async (root: any, args: any, ctx: any) =>
      updateUser(root, args, ctx),
    createBlog: async (root: any, args: any, ctx: any) =>
      createBlog(root, args, ctx),
    updateBlog: async (root: any, args: any, ctx: any) =>
      updateBlog(root, args, ctx),
    removeBlog: async (root: any, args: any, ctx: any) =>
      removeBlog(root, args, ctx),
    sendContactForm: async (root: any, args: any, ctx: any) =>
      sendContactForm(root, args, ctx),
    validateUser: async (root: any, args: any, ctx: any) =>
      validateUser(root, args, ctx),
    createBlogCategory: async (root: any, args: any, ctx: any) =>
      createBlogCategory(root, args, ctx),
    updateBlogCategory: async (root: any, args: any, ctx: any) =>
      updateBlogCategory(root, args, ctx),
    removeBlogCategory: async (root: any, args: any, ctx: any) =>
      removeBlogCategory(root, args, ctx),
    createGalleryItem: async (root: any, args: any, ctx: any) =>
      createGalleryItem(root, args, ctx),
    removeGalleryItem: async (root: any, args: any, ctx: any) =>
      removeGalleryItem(root, args, ctx),
  },
};

export default resolvers;

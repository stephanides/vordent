export type User = {
  _id: string;
  confirmed: boolean;
  email: string;
  firstName: string;
  lastName: string;
  role: number;
  token: string;
};

export type AdminPagePros = {
  token: string;
  role: number;
};

type ImagePath = {
  path: string;
};

export type Category = {
  _id: string;
  title: string;
};
export type CategoryInput = {
  title: string;
};
export type Blog = {
  _id: string;
  image: ImagePath;
  title: string;
  category: string;
  description: string;
  dateCreated?: string;
  slug: string;
  content: string;
  readingTime: number;
};

export type InputBlog = {
  image: any;
  title: string;
  category: string;
  description: string;
  slug: string;
  content: string;
  readingTime: number;
};

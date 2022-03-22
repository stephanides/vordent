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

export type EmployeeCategory = 'doctor' | 'dental' | 'nurse';

export type Employee = {
  photo?: string;
  detailPhoto?: string;
  name: string;
  position: string;
  description?: string;
  category: EmployeeCategory;
};

export type Employees = Employee[];

export type Equipment = {
  photo: string;
  name: string;
  description: string;
};

export type Equipments = Equipment[];

export type Service = {
  icon: string;
  title: string;
  description: string;
  url?: string;
};

export type Services = Service[];

export type PriceListType = PriceListCategory[];

export type PriceListCategory = {
  title: string;
  icon: string;
  subcategory: PriceListSubCategory[];
};

export type PriceListSubCategory = {
  title?: string;
  items: PriceListItem[];
};

export type PriceListItem = {
  title: string;
  price: string;
  insurancePrice?: string;
};

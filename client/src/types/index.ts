interface LoginData {
  username: string;
  password: string;
}
interface RegisterData {
  username: string;
  phone: string;
  email: string;
  password: string;
  status: string;
}
interface LoginResponse {
  user_id: string;
  access_token: string | null;
  refresh_token: string;
  message: string;
}
interface Category {
  id: number;
  name: string;
}
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}

export type {  LoginData, Category, Product, LoginResponse, RegisterData }

// src/types/types.ts

// import { ReactNode } from 'react';
interface ElementProps {
  userId: number;
  userName: string;
  // Thêm các props khác nếu có
}
interface Route {
  path: string;
  // element:;
  element: React.ComponentType<ElementProps>;
  // element: unknown;
  exact?: boolean;
  private?: boolean;
}
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
  // Các thuộc tính khác nếu có
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

export type { Route, LoginData, Category, Product, LoginResponse, RegisterData }

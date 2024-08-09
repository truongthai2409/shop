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
  email: string;
  password: string;
}
interface LoginResponse {
  token: string;
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
export type { Route, LoginData, Category, Product, LoginResponse }

import { IProduct } from "./product.interface"

export interface ICategory {
  id: number;
  title: string;
  products: IProduct[];
}
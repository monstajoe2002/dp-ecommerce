import { Product } from "./Product";

export type CartItem = {
    quantity: number;
} & Product;
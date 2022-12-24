import { CartItem } from "./CartItem";

export type Cart = {
    items: CartItem[];
    totalAmount: number;
    
}
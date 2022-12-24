import { CartItem } from "../types/CartItem";
import useLocalStorage from "./useLocalStorage";

export default function useCart() {
  const [cart, setCart] = useLocalStorage<CartItem[]>("cart", []);
  type cart = CartItem[];
  const addItem = (item: CartItem) => {
    setCart([...cart, item]);
  };
  const removeItem = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  const clearCart = () => {
    setCart([]);
  };
  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);
  return { cart, addItem, removeItem, clearCart, totalAmount };
}

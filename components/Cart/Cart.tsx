import Item from "./Item";
import { Button, Text } from "@chakra-ui/react";
import useLocalStorage from "../../hooks/useLocalStorage";
import useCart from "../../hooks/useCart";
import axios from "axios";
export default function Cart() {
  const [cart, setCart] = useLocalStorage("cart", []);
  const { totalAmount } = useCart();
  const handleAddPurchaseHistory = async (e: any) => {
    e.preventDefault();
    await axios.post("/api/user/purchaseHistory", { 
      createdAt: new Date(),
      updatedAt: new Date(),
      cart:JSON.stringify(cart),
     });
    setCart([]);
  };
  return (
    <div>
      {cart.map((product: any) => {
        if (!product.title) return null;
        return <Item key={product.id} item={product} />;
      })}
      <Text>
        Total Amount:{" "}
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(totalAmount)}
      </Text>
      <Button
        colorScheme={"gray"}
        _hover={{
          backgroundColor: "green",
        }}
        onClick={handleAddPurchaseHistory}
      >
        Confirm Purchase
      </Button>
    </div>
  );
}

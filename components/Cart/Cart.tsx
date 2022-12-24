import Item from './Item'
import { Button } from '@chakra-ui/react';
import useLocalStorage from '../../hooks/useLocalStorage';
export default function Cart() {
  const [cart, setCart] = useLocalStorage('cart', []);
  const handleAddPurchaseHistory = async (e:any) => {
    e.preventDefault();
    
    setCart([]);
  }
  return (
    <div>
      {
        cart.map((product: any) => {
          if (!product.title) return null;
           return <Item key={product.id} item={product} />;
        })
      }
      <Button colorScheme={'gray'} _hover={{
        backgroundColor:'green'
      }} onClick={handleAddPurchaseHistory}>Confirm Purchase</Button>
    </div>
  )
}

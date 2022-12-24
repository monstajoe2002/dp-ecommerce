import { Product } from "../types/Product";
import ProductsList from "../components/Product/ProductsList";
export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
};

export default function Home({ products }: { products: Product[] }) {
  return (
    <div>
      
      <ProductsList products={products} />
    </div>
  );
}

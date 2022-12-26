import { Product } from "../types/Product";
import ProductsList from "../components/Product/ProductsList";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { ChangeEvent, useState } from "react";
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
  const [search, setSearch] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  };
  return (
    <div>
      <Box>
        <InputGroup mb={6} maxWidth={"lg"}>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Search..." onChange={handleChange} />
        </InputGroup>
      </Box>
      <ProductsList products={filteredProducts} />
    </div>
  );
}

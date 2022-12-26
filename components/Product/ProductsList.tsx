import { Grid } from "@chakra-ui/react";
import { Product } from "../../types/Product";
import ProductCard from "./ProductCard";

export default function ProductsList({ products }: { products: Product[] }) {
  return (
    <Grid
      justifyItems={"center"}
      templateColumns={{
        sm: "repeat(1,1fr)",
        md: "repeat(2,1fr)",
        lg: "repeat(3,1fr)",
        xl: "repeat(5,1fr)",
      }}
      gap={4}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
}

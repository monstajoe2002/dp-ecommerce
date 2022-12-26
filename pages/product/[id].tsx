import Error from "next/error";
import { useRouter } from "next/router";
import ProductPage from "../../components/Product/ProductPage";
import { Product } from "../../types/Product";

function ProductPageContainer({ product }: { product: Product }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <ProductPage
      id={product.id}
      title={product.title}
      price={product.price}
      description={product.description}
      image={product.image}
    />
  );
}

export async function getStaticProps({ params }: { params: any }) {
  const productId = params.id;
  const response = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  );
  const data = await response.text();
  const product = JSON.parse(data);
  return {
    props: {
      product,
    },
  };
}

// pages/product/[id]
export async function getStaticPaths() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.text();
  const products = JSON.parse(data);
  const paths = products.map((product: Product) => ({
    params: { id: String(product.id) },
  }));
  return {
    paths,
    fallback: false,
  };
}
export default ProductPageContainer;

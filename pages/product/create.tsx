import { Heading } from "@chakra-ui/react";
import React from "react";
import AddProduct from "../../components/Product/AddProduct";

export default function create() {
  return (
    <>
      <Heading mb={4}>Add New Product</Heading>
      <AddProduct/>
    </>
  );
}

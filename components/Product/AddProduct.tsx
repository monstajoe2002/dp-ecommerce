import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Select,
} from "@chakra-ui/react";
import { FaSave } from "react-icons/fa";
import { Product as FactoryProduct } from "../../backend/Products";
import { FactoryType } from "../../backend/enums/FactoryType";
import { isNumericLiteral } from "typescript";

export default function AddProduct() {
  const [image, setImage] = useState<File | null>(null);
  const [createObjectURL, setCreateObjectURL] = useState<string | null>(null);
  const [product, setProduct] = useState<FactoryProduct | null>(null);
  const name = React.useRef<HTMLInputElement>(null);
  const price = React.useRef<HTMLInputElement>(null);
  const description = React.useRef<HTMLInputElement>(null);
  const img = React.useRef<HTMLInputElement>(null);
  const stockQuantity = React.useRef<HTMLInputElement>(null);
  const category = React.useRef<HTMLSelectElement>(null);
  const uploadToClient = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };
  const createProduct = async (e: FormEvent<HTMLButtonElement>) => {
    // const product = new FactoryProduct();
  };
  return (
    <>
      <Stack gap={4}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Name" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Price</FormLabel>
          <Input type={"number"} placeholder="Price" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Description</FormLabel>
          <Input placeholder="Description" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Stock Quantity</FormLabel>
          <Input placeholder="Stock Quantity" />
        </FormControl>
        <Select placeholder="Select category" isRequired>
          {Object.values(FactoryType).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
        <FormControl>
          <FormLabel>Upload image</FormLabel>
          <Input
            type="file"
            variant={"filled"}
            p={0}
            boxSize={"auto"}
            onChange={uploadToClient}
          />
        </FormControl>
      </Stack>
      <Button mt={10} gap={2}>
        <FaSave />
        Save Changes
      </Button>
    </>
  );
}

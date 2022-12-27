import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalFooter,
  Button,
  FormControl,
  Input,
  FormLabel,
  Select,
  useToast,
  Stack,
} from "@chakra-ui/react";
import React, { ChangeEvent, useState } from "react";
import { FactoryType } from "../../backend/enums/FactoryType";

export default function EditProductModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const name = React.useRef<HTMLInputElement>(null);
  const price = React.useRef<HTMLInputElement>(null);
  const description = React.useRef<HTMLInputElement>(null);
  const img = React.useRef<HTMLInputElement>(null);
  const stockQuantity = React.useRef<HTMLInputElement>(null);
  const category = React.useRef<HTMLSelectElement>(null);
  const [image, setImage] = useState<File | null>(null);
  const [createObjectURL, setCreateObjectURL] = useState<string | null>(null);
  const toast = useToast();
  const handleSubmit = () => {
    const product = {
      name: name.current?.value,
      price: price.current?.value,
      description: description.current?.value,
      img: img.current?.value,
      stockQuantity: stockQuantity.current?.value,
      category: category.current?.value,
    };
    if (!Object.values(product).every((v) => v)) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    console.log(product);
  };
  const uploadToClient = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Product</ModalHeader>
          <ModalCloseButton />
          <Stack gap={4}>
            <ModalBody>
              <FormControl>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input ref={name} placeholder="Name" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Price</FormLabel>
                  <Input ref={price} type={"number"} placeholder="Price" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Description</FormLabel>
                  <Input ref={description} placeholder="Description" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Stock Quantity</FormLabel>
                  <Input ref={stockQuantity} placeholder="Stock Quantity" />
                </FormControl>
                <Select ref={category} placeholder="Select category" isRequired>
                  {Object.values(FactoryType).map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </Select>
                <FormControl>
                  <FormLabel>Upload image</FormLabel>
                  <Input
                    ref={img}
                    type="file"
                    variant={"filled"}
                    p={0}
                    boxSize={"auto"}
                    onChange={uploadToClient}
                  />
                </FormControl>
              </FormControl>
            </ModalBody>
          </Stack>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

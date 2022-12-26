import React, { ChangeEvent, useState } from "react";
import { FormControl, FormLabel, Input, Stack, Button } from "@chakra-ui/react";
import { FaSave, FaUpload } from "react-icons/fa";

export default function AddProduct() {
  const [image, setImage] = useState<File | null>(null);
  const [createObjectURL, setCreateObjectURL] = useState<string|null>(null);
  const uploadToClient = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
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
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Input placeholder="Description" />
        </FormControl>
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

import React from 'react'
import { FormControl, FormLabel, Input, HStack, Stack } from "@chakra-ui/react";

export default function AddProduct() {
  return (
    <>
      <Stack gap={4}>
        <FormControl>
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
        </FormControl>
      </Stack>
    </>
  );
}

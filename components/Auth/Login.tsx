import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { UserRole } from "../../types/UserRole";
import axios from "axios";

export default function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const role = useRef<HTMLSelectElement & UserRole>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      !username.current?.value ||
      !password.current?.value ||
      !role.current?.value
    )
      return;
    await axios.get("/api/auth/login", {
      params: {
        username: username.current.value,
       }
     })
  };
  return (
    <>
      <Button colorScheme={"blue"} onClick={onOpen} variant={"ghost"}>
        Log In
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log in to an existing account</ModalHeader>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input ref={username} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input ref={password} />
            </FormControl>
            <Select ref={role} placeholder="Select role" mt={4}>
              <option value={"customer" as UserRole}>Customer</option>
              <option value={"seller" as UserRole}>Seller</option>
            </Select>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Log In
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

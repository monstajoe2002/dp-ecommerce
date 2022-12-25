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
import axios from "axios";
import React, { useRef } from "react";
import { UserRole } from "../../types/UserRole";
import { useToast } from "@chakra-ui/react";
export default function SignUp() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const role = useRef<HTMLSelectElement & UserRole>(null);
  const toast = useToast();
  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    isFieldEmpty();
    await axios.post("/api/auth/signup", {
      username: username.current!.value,
      password: password.current!.value,
      role: role.current!.value,
    });
  };
  const isFieldEmpty = () => {
    if (
      !username.current?.value ||
      !password.current?.value ||
      !role.current?.value
    ) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return true;
    }
    return false;
  };
  return (
    <>
      <Button colorScheme={"blue"} onClick={onOpen}>
        Sign Up
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign Up</ModalHeader>
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
              Create Account
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

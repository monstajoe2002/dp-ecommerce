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
import React from "react";

export default function Logout() {
  const handleLogout = async (e: React.FormEvent<HTMLButtonElement>) => {
    window.localStorage.removeItem("user");
  };

  return (
    <>
      <Button colorScheme={"blue"} onClick={handleLogout}>
        Sign Out
      </Button>
    </>
  );
}

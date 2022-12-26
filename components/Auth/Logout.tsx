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
import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { User } from "../../types/User";

export default function Logout() {
  const {user, setUser} = useContext(AuthContext);
  const handleLogout = async (e: React.FormEvent<HTMLButtonElement>) => {
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("cart");
    setUser({} as User);
  };

  return (
    <>
      <Button colorScheme={"blue"} onClick={handleLogout}>
        Sign Out
      </Button>
    </>
  );
}

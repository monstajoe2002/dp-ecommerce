import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import React, { useContext } from "react";
import Login from "../Auth/Login";

import Signup from "../Auth/Signup";
import AppDrawer from "./AppDrawer";
import { AuthContext } from "../../context/authContext";
export default function AppHeader() {
  const { user, setUser } = useContext(AuthContext);
  return (
    <HStack mb={4}>
      <AppDrawer />
      {user ? (
        <Text fontSize="lg">
          Hello, <Text fontWeight={"medium"}>{user.username}</Text>{" "}
        </Text>
      ) : (
        <>
          <Signup />
          <Login />
        </>
      )}
    </HStack>
  );
}

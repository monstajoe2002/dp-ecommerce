import { HStack, Text,  } from "@chakra-ui/react";
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
      {user.username? (
        <Text fontSize="lg">
          Hello, <Text as="span" color="blue.500">
            {user.username}.{" "}
          </Text>
          You are logged in as a <Text as="span" color="blue.500">
            {user.role.slice(0, 1).toUpperCase() + user.role.slice(1)}
            </Text>
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

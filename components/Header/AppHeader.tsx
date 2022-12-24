import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Switch,
} from "@chakra-ui/react";
import React from "react";
import Login from "../Auth/Login";

import Signup from "../Auth/Signup";
import AppDrawer from "./AppDrawer";

export default function AppHeader() {
  return (
    <HStack mb={4}>
      <AppDrawer />
      <Signup />
      <Login />
    </HStack>
  );
}

import { Box, Button, FormControl, FormLabel, HStack, Switch } from "@chakra-ui/react";
import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { UserRole } from "../../types/UserRole";
import AppDrawer from "./AppDrawer";

export default function AppHeader() {
  
  return (
    <HStack mb={4}>
      <AppDrawer />
      <Box ml="auto">

      </Box>
    </HStack>
  );
}

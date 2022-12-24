import { Box, Button, FormControl, FormLabel, HStack, Switch } from "@chakra-ui/react";
import React from "react";
// import useLocalStorage from "../../hooks/useLocalStorage";
// import { User } from "../../types/User";
import AppDrawer from "./AppDrawer";

export default function AppHeader() {
  // const [userType, setUserType] = useLocalStorage<User>("userType", "customer");
  // const handleUserType = () => {
  //   userType === "seller" ? setUserType("customer") : setUserType("seller");
  // }
  return (
    <HStack mb={4}>
      <AppDrawer />
      <Box ml="auto">
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="email-alerts" mb="0" ml={4}>
            Customer
          </FormLabel>
          {/* <Switch id="user-type" colorScheme={'cyan'} onChange={handleUserType} /> */}
          
        </FormControl>
      </Box>
    </HStack>
  );
}

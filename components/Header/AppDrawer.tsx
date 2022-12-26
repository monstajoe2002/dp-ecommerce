import React, { ChangeEvent, useContext, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import {
  AddIcon,
  HamburgerIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
} from "@chakra-ui/icons";
import DrawerIcon from "./DrawerIcon";
import { AuthContext } from "../../context/authContext";

export default function AppDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const { user, setUser } = useContext(AuthContext);

  return (
    <>
      <Button mr="auto" onClick={onOpen}>
        <HamburgerIcon />
      </Button>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <Divider />
          <DrawerBody>
            <Stack spacing={"24px"}>
              {user.role === "seller" ? (
                <Button colorScheme={"green"}>
                  <AddIcon />
                  <Text ml={2}>Add Product</Text>
                </Button>
              ) : null}
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            <DrawerIcon />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

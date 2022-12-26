import React, { ChangeEvent, useState } from "react";
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
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SearchIcon, SunIcon } from "@chakra-ui/icons";
import DrawerIcon from "./DrawerIcon";

export default function AppDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

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

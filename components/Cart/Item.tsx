import { DeleteIcon } from "@chakra-ui/icons";
import {
  Flex,
  Image,
  Heading,
  Stack,
  Divider,
  Text,
  Button,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import { NextApiRequest } from "next";
import useCart from "../../hooks/useCart";
import useLocalStorage from "../../hooks/useLocalStorage";
import { CartItem } from "../../types/CartItem";

export default function Item({ item }: { item: CartItem }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { removeItem } = useCart();
  const handleDelete = () => {
    
    removeItem(item.id);
  };
  return (
    <Stack justifyItems={"center"}>
      <Flex
        direction={"row"}
        gridArea={"auto"}
        mt={4}
        maxW={"container.xl"}
        p={2}
      >
        <Image src={item.image} alt={item.title} boxSize={"150px"} />

        <Stack direction={"column"} ml={4}>
          <Heading>{item.title}</Heading>
          <Text size={"sm"} fontWeight={"normal"}>
            {item.description}
          </Text>
          <Text size={"sm"} fontWeight={"semibold"} mt={"auto"}>
            Category: {item.category}
          </Text>
        </Stack>
        <Stack
          direction={"column"}
          ml={"auto"}
          textAlign={"right"}
          color={"blue.500"}
        >
          <Heading size={"lg"} fontWeight={"normal"}>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(item.price)}
          </Heading>
          <Heading size={"md"} fontWeight={"normal"}>
            {item.quantity}
          </Heading>
        </Stack>
      </Flex>
      <IconButton
        colorScheme={"red"}
        aria-label="Delete item"
        icon={<DeleteIcon />}
        w={"auto"}
        onClick={handleDelete}
      />
      {/* Delete prompt */}
      <Divider maxW={"container.xl"} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader>Warning</ModalHeader>
          <ModalBody>Are you sure you want to delete this item?</ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={() => {
              handleDelete();
              onClose();
            }}>
              Delete
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Stack>
  );
}

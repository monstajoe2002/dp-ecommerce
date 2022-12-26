import React, { useContext } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Divider,
  Text,
  Heading,
  Button,
  ButtonGroup,
  Center,
  useToast,
  Link,
  Box,
  HStack,
} from "@chakra-ui/react";
import { Product } from "../../types/Product";
import useCart from "../../hooks/useCart";
import { CartItem } from "../../types/CartItem";
import { AuthContext } from "../../context/authContext";
import { CloseIcon, EditIcon } from "@chakra-ui/icons";
export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const toast = useToast();
  const { user } = useContext(AuthContext);
  const addToCart = (): void => {
    if (!user.username) {
      toast({
        title: "Not logged in",
        description: "Please login to add items to cart",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    addItem(product as CartItem);
    toast({
      title: "Added to cart",
      description: "Item added to cart",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <>
      <Link href={`/product/${product.id}`} _hover={{ textUnderline: "none" }}>
        <Card maxW={"sm"}>
          <CardBody>
            <Stack>
              {user.role === "seller" ? (
                <>
                  <HStack ml={"auto"} spacing={4}>
                    <EditIcon boxSize={5} />
                    <CloseIcon />
                  </HStack>
                </>
              ) : null}
              <Center>
                <Image
                  boxSize="250px"
                  objectFit="cover"
                  src={product.image}
                  alt={product.title}
                  borderRadius="lg"
                />
              </Center>
              <Heading size="md">{product.title}</Heading>
              <Text>{product.description}</Text>
              <Text fontSize="2xl" textColor="blue.600">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(product.price)}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter
            style={{
              display: user.role === "seller" ? "none" : "block",
            }}
          >
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue" onClick={addToCart}>
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Link>
    </>
  );
}

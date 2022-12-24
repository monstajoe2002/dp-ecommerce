import React from "react";
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
} from "@chakra-ui/react";
import { Product } from "../../types/Product";
import useCart from "../../hooks/useCart";
import { CartItem } from "../../types/CartItem";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const toast = useToast();
  const addToCart = (): void => {
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
      <Card maxW={"sm"}>
        <CardBody>
          <Stack>
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
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue" onClick={addToCart}>
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
}

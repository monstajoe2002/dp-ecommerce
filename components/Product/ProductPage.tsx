import {
  Text,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import React, { FormEvent, useRef, useState } from "react";
import { User } from "../../types/User";

export default function ProductPage({
  id,
  title,
  price,
  description,
  image,
}: {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
}) {
  const review = useRef<HTMLInputElement>(null);
  const user = window.localStorage.getItem("user");
  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await axios.post(`/api/products/reviews/${id}`, {
      createdAt: new Date(),
      updatedAt: new Date(),
      user: JSON.parse(user as string),
      review: review.current?.value,
    });
    console.log(review.current?.value);
  };
  return (
    <>
      <HStack justifyContent={"center"}>
        <Flex
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={6}
        >
          <Heading>{title}</Heading>
          <Image src={image} alt={title} boxSize={"300px"} />
          <Text fontSize={"3xl"} mr={"auto"}>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(price)}
            <Text fontSize={"xl"}>{description}</Text>
          </Text>
          <Input
            variant="filled"
            placeholder="Leave your review here"
            ref={review}
          />
          <Button type={"submit"} colorScheme="blue" onClick={handleSubmit}>
            Submit Review
          </Button>
        </Flex>
      </HStack>
    </>
  );
}
